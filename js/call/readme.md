# 手写call

- 手动指定函数内部的This
- 参数一个一个传进去
- apply 第二个参数是数组
- 第一个参数是null 或undefined 时，this指向window
    - 非严格模式下可以，严格模式报错
- 应用场景的区别
    - call apply 都是立即执行，bind 是返回一个函数，需要再次调用
    - call 传递的参数是一个一个的，apply 传递的参数是数组
    - bind 延迟执行

## 手写 call
- call 是属于所有函数的，Function 原型链上的方法
    - greetting.call
- JS中所有函数都是Function构造函数的实例，继承其属性和方法。

## 包含的技能点
- 原型 Function
- 函数参数的理解
  context, rest运算符
- context 为空，null,undefined -> window
- 在 context 上挂载方法，轻松实现函数内部的 this 指向 context
    js 动态性 污染了 context
    es6 symbol 唯一值，不会覆盖context的属性
    delete context上的方法
- return 返回值
