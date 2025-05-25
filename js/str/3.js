// 包装类

let a="abc";
let b= new String("abc");//new String()是一个构造函数，创建一个字符串对象，而不是一个字符串值。
console.log(a==b);//true 值
// js 给所有的简单数据类型提供了 相应类型的类 包装类
console.log(a===b);//false 类型不同
console.log(a instanceof String);//false
console.log(a instanceof Object);//false
console.log(b instanceof String);//true
console.log(b instanceof Object);//true
// 为了统一面向对象写法
// js 会主动将简单数据类型包装为对象类型
// a->new String("a")
// 之后会销毁对象，回归原来的简单类型
console.log(b.split(''));//["a", "b", "c"]
console.log(a.split(''));//["a", "b", "c"]