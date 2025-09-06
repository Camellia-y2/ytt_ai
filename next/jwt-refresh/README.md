# next.js 全栈项目

- user & posts 两张表
- jwt 双token鉴权
- 虚拟列表 
    AI 爬虫 掘金100条数据
- 大文件上传
- AI 工程化
    流式输出
    function tool
    mcp
- ai 搜索
    RAG检索

## 双token
单token localStroage存储 长期，第三方拦截
安全 + 无感刷新登录
双token
- accessToken 校验身份，重要，时间有效期变短，以h小时为单位，cookie
    过期怎么办？
- refreshToken 刷新7d时间长（过期又要登录，用户体验不好）
    没有过期，refreshToken发到服务器 /api/auto/refresh
    返回新的accessToken，无感刷新
- refreshToken 过期后，再去登录（用户体验佳，安全）

## 开发流程
- .env
    mysql url
    create database demo; 新建数据库
- prisma初始化
    npx prisma init
    orm工具
    object relation mapping
    User(表) =》 User 类
    一行     => new User() 实例
    底层数据库操作 映射成 高级的面向对象操作
- Prisma Schema 是定义数据库模型、关系和数据类型的配置文件，用于生成类型安全的数据库客户端。
    数据库的设计图
    比可视化工具 如 navicat 好的地方，schema文件 + git 留下数据库设计和修改的历史
    文档型的，可以追踪。留底。
- Model 表的映射模型
     String? 表示可传可不传
     @@map("users") 指定模型对应的表名，不指定就默认Model后的
     posts          Post[]  一对多的关系（表关系）
     createdAt updatedAt prisma自动维护 创建时间，更新时间
     @id 主键 @unique 唯一索引 @default(autoincrement())默认自增
     email          String     @unique 唯一索引 
    Model User{
        columns name type  @default
        索引
        relation 表关系
    }
- 执行migrate迁移
    npx prisma migrate dev --name init


- restful API
- lib/ 复用的js模块
- regexp
    前端，后端要会正则
    /^.+?[]{}$/.test("")
    ^ 开始 $ 结束 ^$严格匹配整个字符
    .都匹配 一个字符
    + 一次或多次
    * 零次或多次
    ? 零次或一次
    {n} 匹配n次
    {n,} 匹配n次或多次
    {n,m} 匹配n到m次
- bcryptjs 加密js模块 单向的加密算法（不能被解密）
    register 加密一次
    login password加密一次
    比较的是加密后的串是否一样？
- 状态码
    - 200 OK
    - 201 Created
    - 400 Bad Request
    - 401 ForBidden 权限不足
    - 409 Conflict
    - 500 Internal Server Error

- middleware 中间件 概念
    中间件**函数**，用于在请求和响应之间执行预处理逻辑，如日志、认证、数据解析等。
    后台 /dashboard 页面 受保护的页面，登录后才能访问，未登录访问 /dashboard 页面 重定向到 /login 页面
    - 配置一个需要登录的页面数组(受保护的页面)
    - some startWith
    - response.next() 放行
    - response.redirect() 跳转

    - 通过jwt中的verify方法拿到payload后，添加了自定义的请求头
        x-user-id
        后续页面就可以拿到这个值

- JWT 的构成
    - 头部（Header） 
        签名算法 HS256 对称加密算法
    - 载荷（Payload）
        {userId: 。。。}
    - 签名（Signature）
        secretKey
    - Token结构（三部分用点分隔）
        Header.Payload.Signature
    - 实际示例：
        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.           # Header（Base64编码）
        eyJ1c2VySWQiOjEyMywiaWF0IjoxNzM3ODk0NzAwfQ.   # Payload（Base64编码，包含userId=123）
        SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c    # Signature（签名）
    
    userId被签名保护起来 ，而不是被加密隐藏。服务器通过**验证签名来信任Payload中的userId值**。

- cookie
    - httpOnly: true -> 不能用js操作cookie
    HttpOnly 可防止 JavaScript 访问 Cookie，有效抵御 XSS 攻击导致的令牌泄露。
    服务器端设置
    - SameSite 可防止跨站请求伪造（CSRF）攻击，限制 Cookie 在跨域请求中的自动发送，提升安全性。
- 后端安全和性能
    - 一定要做容错处理
        try{} catch(){}finally{}
    - finally{
        //释放数据库对象
        await prisma.$disconnect();
    } 
- prisma client 的CRUD方法
    prisma.user.create()
    prisma.user.findUnique()
    prisma.user.update({
        where: {},
        data: {}
    })
