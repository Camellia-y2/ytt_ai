# async await 是什么，如何实现的？

- 它是ES2017引入的异步编程语法糖（说明本质上没有发生变化，只是看起来更优雅），让异步代码写起来像同步，解决了链式调用很麻烦的问题

- async/await 组合使用
- async 声明的函数一定返回一个Promise
- await 会暂停async函数的执行，等待右侧的Promise解决后继续
- 本质还是异步的，后面的代码会封装到promise的then里面执行

- 本质上，async/await 是对Promise + Generator 的封装
    generator 思想很好，* 区别于普通函数，yield暂停
    运行得到一个生成器迭代对象，next() value和done状态
    太复杂了
    async函数内部会被编译成一个状态机（等待？完成？）
- async/await 简单优雅，但不要滥用，并发的请用Promise.all