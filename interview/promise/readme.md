# promise.all

- MDN 定义
    Promise.all 方法接受一个 promise的**可迭代 iterable**类型的输入 (Array, Map, Set 都属于ES6的iterable类型)，
    并且只返回一个Promise实例。输入的所有promise.resolve结果是一个数组，并按顺序存放。只要有任何一个输入的reject执行回调，就会抛出错误,
    Promise.all的promise失败，catch执行。reject是第一个抛出的错误。

    如果有promise子项失败，那么其他的还没有完成的promise会继续执行，但这些结果不重要了。

- race, any, allSettled
    这一组Promise 上的静态方法，带来了promise的并行
    特点：async await简单，不需要then的链式调用，异步变同步，但也不能乱用，它是串行的。
    如果多个promise值前后有依赖，async await 可以解决这个问题。但如果没有？promise.all()并发更快。