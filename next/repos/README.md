- CSR SPA  seo 不好  爬虫只能拿到一个挂载点 #root
    移动端时代，流量入口不再是百度，应用市场
    Web app 体验好

- SSR 服务器端渲染
    组件在服务器端渲染
    页面渲染更快 SEO好
    Web Site
    AI Web Site 在 Google/Baidu 打榜的
    AI 出海

- shadcn-ui
    - react-vant  组件库安装完项目就慢了
        要按需加载 要和路由懒加载一样（用到哪个组件就加载哪个组件）
    - shadcn-ui 更现代的前端框架
        直接是懒加载
        - base color 主题风格
    - 用的组件是按需安装的
        npx shadcn@latest init
        npx shadcn@latest add button input card 。。。

- next.js 约定俗成
    - app
        可以不需要src
        app 应用目录 
        - 目录即路由(在app目录下的) 
            AppRouter
            repos/page.tsx  localhost://3000/repos
        - api
            后端接口定义
            
RESTful 是一种基于 HTTP 协议设计的软件架构风格，后端通过定义资源的 URI，利用 HTTP 动词（如 GET、POST、PUT、DELETE）对资源进行操作，实现前后端分离和接口的统一化管理。

- AppRouter
    - 自动配置路由，文件夹即路由
- layout
    - 布局组件