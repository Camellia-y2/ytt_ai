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

        

