# 工程化

- 哪些问题？ 工程一揽子方案
    - web server 5173 端口 http 模块？ express 框架（老牌后端框架）
        index.html 首页 
    - tsx -> jsx -> babel 编译为js 
    - styl -> css 文件
    ....
    基础，后方工作

- vite
    - 兼容性问题
        IE 11以下，不支持
    
    vite 是一个基于原生ES模块（webpack老牌，浏览器很多还不支持模块化ESM）
    通过按需编译实现极速冷启动（快）与热更新（局部更新）的新一代前端构建工具。

    - 为什么快？
        - 基于原生ES模块，不需要打包所有文件，按需加载

    在index.html导入入口文件模块 <script type="module" src="/src/main.jsx"></script>
    main.jsx 入口文件，模块的依赖(import 谁就依赖谁)
    main.jsx -> App.jsx -> App.css + react + components + router + api + store
    整理这些模块之间的依赖关系（链条）

- webpack
    由于要支持老旧浏览器，不使用ESM，要打包
    a -> b -> c -> d  a依赖于b b依赖于c c依赖于d
    老旧浏览器不理解模块化，不能像import 直接引入这样解决
    d 编译于 js  最上面
    c 编辑 放到 d 下面
    b 放到 c 下面
    a 放到 b 下面
    一起打个包，成为一个文件

## webpack 和 vite 的区别
- index.html 没有 type="module" 怕浏览器不支持 ESM‘
    整理依赖关系，打包文件，慢
- 适合大型项目，丰富的配置
    - entry, output 这是核心
    - plugins
        html-webpack-plugin html template 在哪？
    - devServer
        http server 细节 
    web bundler 一切静态资源皆可打包
    vite 快，不需要打包，但是有兼容性，生态、定制性不如 webpack
    webpack 打包，慢一点，但是兼容性好，生态丰富，可为
    大型项目定制，有很长时间的业务验证
