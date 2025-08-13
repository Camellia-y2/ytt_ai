# react\vue响应式底层原理

- DOM Api -> 响应式业务
- Object.defineProperty(obj, value, {
    get,
    set
})
    对象上的某些属性的某些行为（get,set）进行定义，在完成本来的职责的同时，去做dom更新，这就是响应式。这是react形成的机制
    拦截相应的行为
- 缺点：有点麻烦，每次只能定义一个属性 defineProperty
- es6 Proxy 可以一次性代理整个对象，不需要一个一个的定义


- obj.value
- React、vue 现代前端MVVM框架，早期用
