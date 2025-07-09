## hooks todos

- 安排个css 亮点
    - stylus
        - css 超集
    - 拥有vite脚手架
        - stylus 预编译 安装stylus 
        - vite  直接编译
        - vite 来着 vue 社区
    - react 组件设计
        - 开发任务单元
        - 设计组件
           - 功能 界面 状态 响应式
               - 新建todo 表单
               - 修改 列表
               - 删除
               - 展示
            - 按功能划分 粒度
                - form 
                - list
                    - Item 组件 维护和**性能**（每次更新列表都要重新运行一遍，组件拆分越细，重新执行的成本就不用那么大）
            - 
- 字体
    - 设置多个，看设备支持，从左到右，选取有的最近的，如果都没有就用默认的
    - 会对苹果设备进行优化 在字体前面加 -apple-system 前端要负责体验，字体也是美感的一部分
- rem
    - 相对单位
    - 移动端的重要单位 px 不要用了  绝对单位
        - 移动端 宽高不定的 rem（html 的font-size），vw/vh(相对视窗)，em相对自身的 font-size 等比例
        - 使用相对单位，可以在所有设备上适配
- props
    - 传递状态
    - 传递自定义事件（函数）
    - 解构
        直接解构（参数不多）  
        const{
            todos,//任务
            addTodo,//添加任务
        }=props 单独解构（参数多） 可以注释

- 数据绑定
    - 变量  修改值
    - 数据状态
        - Data binding **数据**绑定  没有这个，jsx就是静态的
        {} 数据绑定
        - 数据和界面状态的统一
            - 界面由数据驱动的
            - 数据和界面状态的一致性
        - 响应式的

- vue 和 react 的区别
    - vue 好入门，api文档好用
    - react 倾向于原生 JS 入门难
        - hooks react提供的很好用的函数，以use开头
    - <input v-model="text" /> vue 双向绑定
        <input value={text} onChange={e=>setText(e.target.value)} /> react 坚持单向绑定 
        - 为何？？？

- 本地存储
    - localStorage 本地存储 html5
      key:value 存储
      setItem(key,value)
      getItem(key)
      removeItem(key)
      clear()
    - 挂载在window上
    - BOM Browser Object Model 浏览器对象模型
    - DOM Document Object Model 文档对象模型
- 本地存储
    - localStorage 和 cookie
    - https 无状态，header 通过 cookie 带上，模拟有状态。
    - cookie 每次都要携带，如果 cookie 太大，会影响 http 性能，最大4KB
    - cookie 前端，后端都可以设置
        - 可以设置过期时间
    - localStorage 前端浏览器端设置，后端无法设置，最大大概 5MB
    - localStorage 只能存储字符串，需要序列化和反序列化
    - localStorage 生命周期，永久存储，除非手动删除

    - IndexDB 数据库 最大 5GB

## 自定义hooks 
    - 自己定义的
    - 以use开头
    - 某一项功能
       - 简单函数的封装
       - 响应式的状态
       - effect
       - todos
    - 自定义hooks
        - 现代 react app 的架构一部分
        - hooks目录
            - 自定义hooks
            - 框架做common部分
            - 业务定制 ahooks
        - 以 use 开头
            - state effect 逻辑封装复用
            - toggle addTodos deleteTodos
            - 函数式编程思想的体现
        - 组件更好的聚焦于模版渲染
        - 全面hooks函数式编程

- 两个遗憾
    - ../../ 路径山路十八弯
        - vite配置 alias 短路径 (绝对路径)
    - toggle、delete 跨越组件层级有点多，useContext 解决跨组件层级传递


       

        

