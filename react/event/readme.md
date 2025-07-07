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