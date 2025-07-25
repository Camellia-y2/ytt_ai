# 路由

history
hash

- 传统页面开发
    a
    重要的用户体验缺失
    - 需要去到后端拿到新的html,重新渲染
        切换页面会出现白屏（重新加载新页面 渲染），体验不好
    - a链接切换页面
    - 相比于react-router-dom 局部热更新
    前端路由去负责 

- 新的react-router-dom **SPA 单页应用**
    只有一个页面 但能带来多页面效果

## SPA
- Single Page Application 单页应用
- 只有一个页面
    - react组件
        - 页面级别组件
    - Routers/Router 申明 文档流中占位
    - Routes外面 Outlet外面 不用更新的
    - url
    - Route内部显示哪个页面组件
        - 热更新

    - 用一个页面完成了多个页面的显示
    - SPA 用户体验特别棒

## 核心
- url 切换
    不能用a标签
    用Link：不去重新发送请求，事件，js动态加载
- 事件 hashChange / pushState
- 根据当前的url 取对应的组件
    替换掉之前的页面级别组件
- 体验是
    URL改变了 竟然不用刷新整个页面
- 不再看到白屏
    页面展现很快
    About Home 全是前端组件，不需要去请求后端

## url改变，但不重新渲染的解决方案
- hash的改变 很早就有
    原来是用来页面锚点 长页面的电梯
    不会刷新页面
    #/
    #/about
- 事件
    - 哈希事件 hashchange

## 基于SPA
- url 可以改变 url不等于一次新的http请求，不会向后端发送请求 它是前端路由
    - 方案一：hash + hashchange事件 + DOM操作
    - 方案二：history + pushState / popstate
- 前端路由 react-router-dom 配置相应的页面级别组件，进行热更新 Route Outlet
- 单页应用 （通过 tab 栏切换实现）
    - 只有一个页面，但可以有多个 url 路由状态 
    - 有很多页面级别组件
    - window.location window.history
    - 浏览历史用栈实现
    - state

- history
    很早就有，在浏览器历史记录里游走
    - html5 赋予 history 新的功能
    - hash + hashchange 有优点也有很大的缺点
        - 优点：兼容性好
        - 缺点：http://127.0.0.1:5500/html5/router/3.html#home
               hash 不好理解
               不这样 想和传统后端路由一样
               http://127.0.0.1:5500/ 首页
               http://127.0.0.1:5500/about 关于
    - 怎么样像后端路由一样，还不刷新页面？
        - html5 升级了 history api 来实现
