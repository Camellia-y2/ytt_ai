# type interface 类型声明

- 相同点
    都可以用来声明类型，自定义类型

- 区别：
    - 继承
        当我们要编写继承类的时候，interface 只要 extends 就好
        type 要 & 并集 才能继承
    - 多次声明 合并
        interface 可以多次声明，会自动合并
        type 不可以多次声明
    - 定义基础类型、联合类型、元祖
        type 可以定义基础类型、联合类型、元祖
        interface 只能定义对象类型（函数、类）
    - type 支持简单类型的别名， interface不可以 
        type NumberOther = number;
        let a:NumberOther = 10;
    - interface 和 type 在声明函数类型上有区别
