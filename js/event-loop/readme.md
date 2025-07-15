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
  
- 微任务有哪些？
  紧急的，优先的，同步任务执行完后的一个补充
  - promise.then()  注意：promise是同步任务
  - MutationObserver  监听dom变化 在页面渲染前
  - queueMicrotask  微任务队列
  - process.nextTick  node.js

## 多进程和多线程
浏览器 多进程 多线程
- CPU 轮询 
  一个核只能执行一个任务
- 进程
  分配资源的最小单元
    内存（地址，物理） CPU计算的机会
    独立的进程ID 一定的大小，开销
    程序运行以进程为单位
    - 主进程
      管理子进程 父子关系 并发 并行
      进程间的通信
    - 主线程
      执行js代码。。。
- 线程
  执行的最小单元
    线程是CPU计算的最小单位
    一个进程至少有一个线程
- 进程间的通信
  两个独立进程间的通信开销很大
  父子进程就好点

- chrome浏览器是多进程架构
  - 浏览器主进程
  - 一个tab（标签页）就是一个渲染进程，几个tab就是几个渲染进程
     - 安全 一个页面crash了，别的不受影响
  - 主线程 主角
    - js 单线程
      - 简单
      - DOM 编程模型  线程的争抢不可以 安全

  - setTomeout  专属定时器线程 
    - 为什么setTimeout 不准？？ 
      声明定时器是同步，但是执行是异步，假设timerId1延迟2s执行，timerId2延迟1s执行，但是先声明timeId1，
      如果没有专属的定时器进程，那么谁在前面就会先被放到event loop中，那么timerId1就会先执行，就出现错误。
    - 到时间了，callback 放入宏任务队列，放到event loop 中，执行event loop 机制
    - 宏任务 微任务 队列 
  
  - addEventListener 没有独立的线程
    DOM 不需要  宏任务队列
  - fetch/xhr 专属的下载线程

- 渲染进程的主线程
  - 解析HTML -》 DOM 树 
  - 解析CSS -》 CSSOM 树
  - 合并DOM 和 CSSOM 树  -》 渲染树（Render Tree）
  - 布局（Layout） -》 计算位置
  - 绘制（Paint） -》 绘制到屏幕上
  - 合成（Composite） -》 合成图层，提交给GPU
  - v8引擎 JS执行
  - 绘制与主线程无关？？

- 事件队列？
  - 定时器到点了
  - onreadystatechange 4
  - 宏任务队列
  - 微任务队列
  
- 页面渲染
  - 为什么要把渲染放在宏任务前 微任务后？
    - 批量更新处理，减少重绘重排
    - 渲染放在 宏任务前、微任务后，是为了保证所有 JavaScript（同步和微任务）执行完毕，确保 DOM 更新完成且数据一致。
    - 这样做可以 减少页面重绘次数，提升性能。
    - 微任务机制让开发者能在渲染前对 DOM 做最后调整，保证用户看到的是最终结果。

- JS 和 渲染是互斥的
 

            