# deep router

- router
- 401
- 301/302 重定向
- 404 
- 性能优化

- SPA带来了优质的用户体验
    - 快
    - 不会白屏，不依赖于http 取服务器端请求页面
- 前端首先加路由，SPA应用
    React
    ReactRouter
    Redux
- 导航，封装
    lazyLoad
    - / home
    - /about About
    只加载当前需要的，其他不加载
- es6 module 引入模块并且会执行
- 懒加载流程
    - import es6 加载并执行太多的非必要组件
    - 导入lazy,Suspense
       lazy 高阶组件（返回值是组件）
    - import('./pages/Home') 动态加载
    - <Route /> 匹配到 才会去动态加载相应的组件
    - Suspense 在还未加载前 fallback