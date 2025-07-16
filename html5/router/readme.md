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

- 新的react-router-dom SPA 单页应用
    只有一个页面 但能带来多页面效果

## SPA
- Single Page Application
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
 