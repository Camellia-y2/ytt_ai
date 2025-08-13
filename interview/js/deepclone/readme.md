# 深浅拷贝
- Object.assign(target, source1, source2, ...)
    浅拷贝

- Object.assign(target, source1, source2, ...) 方法用于将一个或多个源对象的所有可枚举属性复制到目标对象，并返回修改后的目标对象，常用于对象的浅拷贝或属性合并。
- 返回的是新对象吗？
    - 不是，返回的是目标对象（第一个参数）
- 不支持深拷贝
    - 深拷贝：拷贝的是对象的所有属性，包括对象的属性，对象的属性的属性，**直到属性是简单数据类型为止**。
        - 安全问题，对象比较深，值也是对象，管他有多深，都能一直拷贝，不会影响源对象
- 浅拷贝
    - 浅拷贝：拷贝的是对象的所有属性，但是如果属性是对象，拷贝的是对象的引用，而不是对象本身。
        - 简单，功能强大（可以使用 Object.assign）
    
- 怎么支持深拷贝
    
- 面试官的想法
- 深拷贝、浅拷贝是必考内容
- 以Object.assign()开场
    - 表演时间 面试是当面展示自己
    API细节 -> 业务场景（怎么用） -> 赋值 + 引用浅拷贝 -> 底层原理

    JSON.parse(JSON.stringify()) 最简单的方法
    - 问题：不会拷贝函数（不知道怎么序列化）、symbol、undefined 、循环引用
    勾引对方考察手写深拷贝
    - 赋值和引用的概念
        简单数据类型：赋值拷贝，改变拷贝的不会影响到原数据
        引用数据类型：引用拷贝，改变拷贝的会影响到原数据
- 如何拷贝？看业务
    - 如果是简单数据类型，’=‘就好。
    - 如果是浅的对象或数组
        Object.assign()
        Array.prototype.slice
        Array.prototype.concat
    - 简单深拷贝 Object.parse(Object.stringify())
        JSON.stringify() 序列化规则
        undefined、function、Symbol 不是合法的 JSON值
    - 复杂深拷贝：symbol 函数
        手写实现： 高级深拷贝
        - JSON.stringify() 没有办法拷贝的
        - 拷贝，简单，遍历，复制
        - 深度，递归


