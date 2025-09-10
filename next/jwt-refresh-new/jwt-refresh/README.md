# next.js全栈项目

- users & posts 数据库表
- jwt的双token  鉴权
- 虚拟列表  
    AI爬虫 爬取掘金的100条数据
- 大文件上传
- ai 工程化
    流式输出
    function Tool
    mcp
- ai 搜索

## 双token 安全+无感刷新
单token  localStorage 长期，第三方拦截 不安全
双token
  - accessToken 校验身份 重要 时间有效期变短 以h为单位 存在cookie中
      过期怎么办？

  - refreshToken 刷新 7天 时间长
      没有过期，refreshToken 发到服务器  /api/auth/refresh
      返回新的accessToken 无感刷新
      过期后，重新登录获取新的token


## 开发流程
- .env
  mysql url
  create database demo4 建立数据库
- prisma 初始化
    orm 工具
    object relation mapping
    User(表)=》User类
    一行    =》 new User()实例
    将底层数据库操作 映射成 高级的面向对象操作
- Prisma Schema 是定义数据库模型、关系和数据类型的配置文件，
用于生成类型安全的数据库客户端。
    数据库的设计图
    navicat 好的地方，schema+git留下数据库设计和修改的版本历史
    文档型的，可以追踪，留底

- Model 表的映射模型
    @@map("users")  指定模型对应的表名
    posts Post[] 一对多的关系
    createdAt updatedAt  primsa自动维护
    @id 主键 @unique 唯一索引
    Model User{
      cloumns name type @default
      索引
      relation
    }

    - migration 迁移
        留下记录

- restful API
- lib/复用的js 模块
- regexp 正则表达式
    前端、后端都要会正则
    /^.+?[]{}$/ test
    ^开始  $结束
    . 都匹配 只匹配一个字符
    ? 0次或一次
    [] 范围
    {} 长度
- bcryptjs 加密js模块 单向加密算法（不能被解密）
    register 注册时 加密一次
    login 登录时 再加密一次
    比较的是加密后的字符串是否一样
- 状态码
    - 200 OK  成功
    - 201 Created 成功创建
    - 400 Bad Request 客户端错误
    - 401 Unauthorized forbidden 未授权
    - 403 Forbidden 禁止访问
    - 404 Not Found 未找到
    - 409 Conflict 冲突
    - 500 Internal Server Error 服务器错误

- middleware 的概念
    是中间件，用于请求和响应之间执行预处理逻辑，如日志，认证，数据解析等
    中间件 配置一个白名单
    /dashboard 
    - 配置一个需要登录的页面数组
    - some startWith 检查路径是否以数组中的元素开头
    - response.next() 放行
    - response.redirect() 跳转

    - 通过jwt verify方法拿到payload后，添加了自定义的请求头
        x-user-id
        后续页面可以拿到这个值
- JWT的构成
    - Header 头部
        前面算法 HS256
    - Payload 载荷
        {userId:1}
    - Signature 签名
        secretKey 密钥

- 后端安全和性能
    - 一定要做容错处理
        try{}catch(){}finally{}
    - 释放数据库对象
- prisma client 的CRUD方法
    prisma.user.create()
    prisma.user.findUnique()
    prisma.user.update({
      where:{
        id:user.id
      },
      data:{
        refreshToken
      }
    })

- cookie
    - httpOnly: true
        HttpOnly 可防止JavaScript访问Cookie,有效抵御XSS 攻击导致的令牌泄漏
        在服务器端设置
    - SameSite
        可防止跨站请求伪造（CSRF）攻击，限制Cookie在跨域请求中自动发送，提升安全性
        比如你从淘宝到天猫，cookie是不会自动带上的

- 后端安全和性能
    - 一定要做容错处理
     try{}catch(){}finally{}
    - 释放数据库对象

## 大文件上传
当文件比较大的时候，由于各种原因，很容易失败，而且上传速度慢
一旦失败，需要重新上传，会让用户沮丧

采用分片上传策略（并发，并发限流），将文件切分为多个小块
并行上传，提升稳定性和效率，上传前通过Web Worker 计算文件整体
以及分片的hash，向服务器校验
若文件已存在，则直接秒传
前端记录上传进度和已经成功分片，支持断点续传，避免重复上传
服务器按序接受分片，存储后进行合并，并校验最终文件的完整性，结合唯一标志和分片索引，确保上传可靠
整个过程配合进度条和错误重试机制，提升用户体验与系统健壮性

- webworker hash 计算
- 性能优化
    上传文件的处理函数 handleFile 使用useCallback缓存，避免重复创建
- typescript的使用
    - 主线程和worker线程间的通信，数据约定
    HashWorkerIn
    HashWorkerOut
    as 断言
    非空断言 ！  file!.size
        ! 是 TypeScript 的非空断言操作符，用于告诉编译器“我确定这个值不是 null 或 undefined”，从而安全地访问其属性或方法。

- useRef的高级使用场景
    可变对象
    - DOM对象
    - 对象
    - 值
    AbortController 取消请求的对象，推迟到上传再实例化
    暂停的值也使用了ref来保存

- es6 特性
    - Set 存储已经上传的分片索引
    - ?? 空值合并操作符
    - Promise.all并发上传
    - Map 和 Set
        使用Set去完成大文件切片与已经上传索引的不重复

- restful api
    - uploadChunk  PUT /api/upload/chunk  url设计
    - 自定义请求头：这里的 headers 通过自定义请求头传递元数据（文件哈希、分片序号），使服务端能在不解析请求体的情况下快速识别分片归属和顺序，提升处理效率和可扩展性。
        只解析请求头就可以判断是否已上传的chunk更快，避免重复上传
         headers:{
        'x-file-hash':hash,
        'x-chunk-index':String(index)
        }通过hash与chunk-index共同定位分片

## 项目的难点
- 分片上传的并发控制
    promise.all + 递归
    并发限流的核心是：一开始只启动不超过 MAX_CONCURRENCY 个工人函数，每个工人执行完一个任务后会递归调用 next()，继续从队列取下一个任务，从而保证始终只有固定数量的工人在运行。这样既避免了同时创建过多 Promise 占用资源，又能充分利用并行度；等所有工人都把队列清空才 resolve，Promise.all 就能精确等待整个批次完成。


## 考点
- process.cwd()与__dirname的区别
项目根目录：process.cwd()为运行命令的当前工作路径，__dirname是当前文件所在目录，两者可能不同，
前者随运行位置变化，后者固定在文件路径
- path.join()与path.resolve()的区别
    - path.join()
        拼接路径，不会考虑路径是否存在，只是简单的拼接
    - path.resolve()
        解析路径，会考虑路径是否存在，会返回绝对路径
        从右往左 遇到/ 就会切换到根目录，绝对路径
    ```js
    path.resolve('/foo/bar', '../baz')// '/foo/baz'
    path.join('/foo/bar', '../baz')// '/foo/baz'
    path.join('a','/b','c')// 'a/b/c'(即使/b 为绝对路径，也当普通字符串处理)
    path.resolve('a','/b','c')// '/b/c'（遇到/b就重置）  
    ```

## merge 的流程
- fileHash 传入


## 虚拟列表
- 数据从何而来？
    爬取一下数据
    pnpm i x-crawl
- 怎么渲染列表
    - 时间分片
        setTimeout + requestAnimationFrame + createDocumentFragment
    - 虚拟列表
        按需加载
    - 分页
        滚动到底部加载更多
