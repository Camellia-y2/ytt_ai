# react 旅游App
Readme.md 很重要 方便面试官
- 移动App 
- 模仿一个App
    - 喜欢的、国外的
    - 有点改变
- 涵盖绝大多数考点
    - 都适用于任何App

## 技术栈
- React全家桶
    - React 组件开发
        组件封装
        第三方组件库
        受控和非受控组件
        hooks 编程  自定义hooks
    - React-Router-dom
        路由守卫、路由懒加载、SPA
    - Zustand
- mock.js 接口模拟
- axios 网络请求拦截和代理
- JWT 登录
- module css 模块化
- vite 配置
- 性能优化
    防抖节流
    useCallback useMemo...
- css预处理器 stylus
    flex transition transform...
- LLM
    - chat
    - 生图 多模态
    - 语音
    - coze 工作流 调用
    - 流式输出
- 移动端适配
    - rem 布局
    - vh vw 单位
    - 禁止缩放 user-scalable=no
- 单例模式
- git 提交等编程风格

## 项目的架构
- components
- store
- store
- hooks
- api
- mock

## 开发前的准备
- 安装的包
    pnpm install react react-router-dom zustand axios react-vant(UI组件库)
    (stylus) lib-flexible(解决移动端适配)
    开发期间的依赖 pnpm i vite-plugin-mock jwt -D
- vite配置
    - alias vite.config.js
    - mock
    - .env.local
    llm apiKey
    - user-scalable=no
    - css 预处理
        index.css reset预处理
        box-sizing font-family:-apple-system
        App.css 全局通用样式
        module.css 模块化样式
    - 移动端适配 rem
        不能用px，相对单位rem html
        不同设备上体验要一致
        不同尺寸手机 等比例缩放
        设计师设计稿 750px iphone4  375pt * 2 = 750
        小米 
        css 一行代码 手机的不同尺寸 html font-size 等比例
        layout
        flexible.js 阿里 在任何设备上
        1rem = 屏幕宽度/10
- lib-flexible
    阿里开源
    设置html font-size = window.innerWidth / 10
    css px宽度 = 手机设备宽度 = 375
    1px = 2个发光源（物理像素） 发光源越多越高清
    750px 设计稿

- 设计稿上一个盒子的大小
    - 1像素不差的还原设计稿
    - 设计稿中像素单位
    - 例子：
        200px 设计稿盒子大小
        750px 手机设备宽度
        相对 盒子的大小rem = 设计稿的大小 / 手机设备宽度 * 10 （除不尽保留5位小数，四舍五入）
        200px / 750 * 10 = 2.66667rem

## 项目亮点
- 移动端适配
    - lib-flexible  1rem = 屏幕宽度/10
    - 设计稿 尺寸是iphone4 标准尺寸 750px
    - 前端的职责是还原设计稿
    - 频繁的单位 260/75... 换算
    - 自动换算？ 
        postcss 插件 + postcss-pxtorem
        postcss 是 css 预编译器，很强大
        vite会自动读取 postcss.config.js 将css内容编译
        px->rem

## git 提交规范
- 移动端适配等项目初始化
## 功能模块
- UI 组件库
    - react-vant 第三方组件库 70%的组件已经有了，不用写
    - 选择适合自己业务的UI组件库 或者公司内部的组件库
- 配置路由及懒加载
    - 懒加载
    - 路由守卫
    - Layout组件
        - 嵌套路由Outlet 分组路由配置
        - 网页有几个模板 Layout组件
            - Route 不加path 对应的路由自动选择
            - 主模板 MainLayout tabBar
            - 空模板 BlankLayout
    - tabbar
        - react-vant + @react-vant/icons
        - value + onChange 响应式
        - 直接点击链接分享 active 的设置
- chatbot 模块
    - llm 模块 chat 封装
    - 迭代chat, 支持任意模型
## 项目亮点与难点
- 前端智能
    - chat 函数
    - 对各家模型比较感兴趣（openAI，deepseek，豆包，kimi，claude...） 升级为kimiChat , doubaoChat...灵活
        性能、能力、性价比
        随意切换大模型，通过参数抽象
- 原子css
    - App.css里面添加通用样式
    - 各自模块里module.css 不影响别的组件
    - postcss pxtorem 插件 快速还原设计稿
    - 原子类的css
        一个元素按功能逻辑拆分成多个类，和原子一样
        元素的样式就可以由这些原子类组合而成
        样式复用的更好，以后几乎可以不用写样式
## 项目遇到过什么问题，怎么解决的？
- chat messages 遇到message覆盖问题
- 自定义hooks
    - useTitle 自定义页面标题 （一定要设置）

- es6特性使用
    tabbar 的高亮
    - arr.findIndex
    - arr.startsWith
    - promise

- 项目迭代
    - 功能由浅入深
    - chatbot deepseek 简单chat
    - deepseek-r1 推理模型
    - 流式输出
    - coze 工作流 接口调用
