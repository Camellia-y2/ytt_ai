- npx create-next-app@latest my-todo
    基于create-next-app 创建了一个my-todo next.js项目
- npx 
    不用先安装，它会先安装，可以直接运行，适合项目的测试（测试工程师可能要测试很多项目，java python react等等，需要安装很多依赖，不方便），不会留下痕迹，不影响全局
    用 npm 就要先安装，再运行 ： npm i -g create-next-app@latest
    尝试一下某种技术的时候，特别有用

- CSR and SSR
    组件在客户端运行 模版编译，挂载，浏览器（client） SPA 谈不上SEO
    Next.js 服务器渲染SSR 组件的编译发生在服务器，SEO 非常好
    爬虫爬取的是服务器端返回的html，而CSR只有一个#root
    企业站 SEO 掘金