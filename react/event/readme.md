# react 事件机制
- js 事件机制
    - 异步
    - 监听一个事件
        - addEventListener() 标准的DOM 2级事件
        - DOM 0级事件  <a onClick="doSomething()">点我跳转</a>
        - DOM 1级事件？  DOM 版本，没有对事件进行更新，所以只有DOM 0,DOM 2 级事件
        - 回调函数 callback 异步处理的称呼
        - promise then
        - async await 
          监听器

- useCapture false 默认值
    - 先捕获 document -> 一层层去问
        点了谁？
        先触发父元素
    - 目标阶段 event.target 事件源
        捕获阶段结束，拿到event.target
     - 冒泡 
        从event.target 开始，一层层冒泡 html 回去到根
        事件让他在冒泡阶段执行
        在哪个阶段执行
        - 捕获阶段，事件从最外层开始，到目标元素
        - 冒泡阶段，事件从目标元素开始，到最外层
        - 事件冒泡

## 事件委托优势 delegation
- 性能优化
    - 极致将事件委托给最外层元素
    react 大型项目开发
    给我们的事件节点event.target 添加一个唯一属性
- 动态节点的事件
    - 滚动到底部，一次新增一堆的元素
    - 事件委托可以有效解决
- 同一元素同一事件注册多次
    - dom节点
    - event type
    - 监听器（回调函数） event loop
- useCapture

    - event.preventDefault() 阻止默认行为
      form submit
      a
    - event.stopPropagation() 阻止冒泡
  
- 用户交互的便利体验问题
    - toggle 按钮
    - 点击任何地方可以关闭 方便 stopPropagation()
    - 显示区域可以交互 stopPropagation
