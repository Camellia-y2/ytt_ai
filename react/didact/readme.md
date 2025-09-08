# 手写react

- Didact
    - 命名空间 namespace
    - 对象字面量

- VDOM
    UI 表达 JSX
    JSX -> 转成VDOM ？

- JSX react优点
    - 语法糖
    - 在 js 里面编写 HTML，babel 转成 React.createElement 调用
    - Didact.createElement

## createElement

- App.jsx -> babel 转成 Didact.createElement( tag, props, ...children ) 调用   
    返回的结果 VDOM -> render 生成真正的DOM
    返回的结果 VDOM
    由Vnode 节点（vue中叫做Vnode，react中就是createElement）组成的VDOM树，每个节点包含type,props两个属性，props.children是子节点，也是一个对象

## Didact 运行的入口
- babel 将 JSX 转译为 React.createElement 方法调用，给相应的参数，生成虚拟DOM
    @babel/preset-react pragma 编译后的函数名

React.createElement 返回的 Element 就是一个描述“要在页面上渲染什么”的普通 JavaScript 对象（即虚拟 DOM 节点），它包含 type、props 等属性，是 React 用来对比变化并高效更新真实 DOM 的虚拟表示。

- createTextElement 这么复杂？
    本来type是没有的，children也没有的，但是为了统一，所以要创建一个文本节点

## 目前完成
- React is a nameSpace
- The createElement Function (工厂模式)
- The render Function
- Concurrent Mode 并发模式
- fiber 架构 可中断

## Concurrent Mode 并发模式
React Concurrent Mode 是一种让渲染过程可中断、可优先级排序的机制，通过将工作拆分为小块并允许高优先级更新（如用户输入）插队，从而避免主线程阻塞，提升应用的响应性和流畅度。
fiber 节点 工作节点
- 中断
- 继续
- fiber 节点对象有哪些属性