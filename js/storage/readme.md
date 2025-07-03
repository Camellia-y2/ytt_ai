# Storage 存储
    - 前端存储
        - cookie
        存储什么？
            - 登录状态
            - 购物车
        - localStorage
        - sessionStorage
        - indexDB
    - 后端存储
        - mysql
        - mongodb
        - NoSql

## 首页
    - 用户的状态
    cookie
    - 服务器识别用户
    - B/S 架构软件 http 协议
    - http 0.9 无状态协议，服务器不记录请求历史
        - 每次请求都是独立的
        - 请求一次和1000次，拿到的内容都一致
        - 身份状态？
    - http 1.0 有状态协议
        - Header请求头
        - Content-Type
        - Authorization
        - Cookie uid=124532
        - 用户带上，服务器解析 你的身份了
        - http 协议还是无状态的，请求头，可以加带一些私货
    - 界面会有哪些状态
        - 未登录 已登录 用户身份 时间 时期 主动登出
    - 前后端联调
        - 前端表单
           - 阻止默认行为
           - 收集表单值
           - fetch 请求 await 等待服务器端响应请求
           - POST /login api 地址
           - 后端
           - 路由 /login
           - 用户名和密码的校验
           - 通过设置cookie 响应头  Set-Cookie
           - 服务器端的返回 http 一起回到请求端
           - 前端存储里

## Cookie
    Cookie是存储在用户浏览器中的 **小型文本** 数据，用于会话管理和用户追踪。
    - 每次http的时候，会自动带上cookie信息
    - cookie 是一块小饼干（内容小） 关键的身份信息，存储在浏览器中（位置）
    - HTTP协议 还是无状态的，服务器不记录请求历史，每次请求独立，他是通过在请求头中携带cookie信息，来识别用户的身份的。
