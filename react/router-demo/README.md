# react-router-dom

- 路由？
    - 后端路由
      **暴露资源**
    - 前端路由
      - 首页
      - 列表页
      - 登录页...
      前端页面导航由前端路由负责
- react 开头
  react 生态系统的一部分
  - react 
    负责响应式、状态管理、组件、hooks等核心功能，那为什么要交给 react-router-dom 呢？
    - 如果交给react做，会有什么问题？
      - 体积大、笨重
      - 页面慢
      - 少就是多
 - react-router-dom
 - redux/mobx
 - axios

 ## react 开发全家桶
 - react 19
 - react-router-dom 7.6.3   
    - 版本号代表
        - 7 大版本 推翻之前的版本，大改动
        - 6 小版本 更新 迭代，增加一些功能，完善
        - 3 紧急修改版本 紧急修改版本会修改一些bug

## react特色
- 全面组件化
  比vue 更执着
  react 函数化编程 

- 动态路由
  https://juejin.cn/users/123?a=1&b=2#hash
  协议://域名/端口（省略）/路径
  协议://域名/端口（省略）/路径?查询参数#hash
  # restful 国际规范 
  url 定义是核心部分 
  Method 资源的描述
  GET /user/:id 个人中心
  GET /post/:id 显示某篇文章
  POST /post 新增文章
  PUT /post/:id 修改(替换)文章
  DELETE /post/:id 删除文章
  PATCH /post/:id 局部修改文章
  HEAD /post/:id 查看文章的元信息(响应头信息)

  PUT(替换) patch(局部修改)
  上传头像  PUT  /avatar/:id
  - 后端路由 暴露资源

- 前端路由

- 后端路由
  早期只有后端路由
  server->http->路由（后端）->响应html网页 传统的后端驱动的web开发方式
  展示下一个页面 再来一个请求 
  /
  /about
  - 有点足够简单
  - 前后端耦合
  - 逻辑，数据库，套页面 MVC开发方式
  - 不在以返回页面为目的
  - /api/user/:id

- 前后端分离
  - 前端也有了路由
  - html/css/js react 框架