# event loop
事件循环机制 js 执行机制

- js 单线程
  同一时刻只做一件事
  同步任务优先，尽快执行完，渲染页面（重绘重排），响应用户的交互（优先）
  耗时性的任务 ？
    - setTimeout/setInterval
    - 网络请求 fetch/ajax
    - eventListener
- script 脚本
  一个宏任务
  
            