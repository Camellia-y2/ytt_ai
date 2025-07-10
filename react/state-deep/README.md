## useState
- 请介绍一下useSteate
    React 内置的hook 给函数组件添加状态
    接受一个初始值，返回一个数组，第一项是当前状态值，第二项是更新状态的函数
 - setState 是同步吗？？
    不是，setState 是异步的，会被合并，然后批量更新
    