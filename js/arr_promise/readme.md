需求

api.github.io/users/shunwuyu/repos
api.github.io/users/LeeAt67/repos

- Promise.all()
    - 它接收一个 **Promise 实例数组** 作为参数，并返回一个**新的 Promise**，本身也是promise
    - 主要作用是**并发（并行）执行**多个异步操作，并在**所有操作都成功完成**时返回结果。
    - 有一堆的异步任务要执行
    - 每一项有是一个promise
    - 所有项都解决了，都成功， Promise.all() 才会成功，每个promise的结果都在数组中,按原数组下标存放
    - 有一个失败了， Promise.all() 就会失败
    - Promise.all 是静态方法，不是实例方法



