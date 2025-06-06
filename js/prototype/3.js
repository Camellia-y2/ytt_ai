// 没有 class 的 js 如何在苦苦追求 OOP
// 构造函数 首字母大写 约定 
// 1.类的概念
// 2.构造
function Person(name, age) {
    // this 指向当前实例化的对象
    this.name = name;
    this.age = age;
}
// 函数对象  原型对象
// 类的方法
Person.prototype = {    
    sayHello: function() {
        console.log('Hello, my name is ' + this.name);
    }
}

// new 一下 实例化对象
// new 运行构造函数
let hu = new Person('吉他胡', 18);
hu.sayHello();
// 原型对象 (任何对象都有原型)
console.log(hu.__proto__);//{ sayHello: [Function: sayHello] }
let o = {a:1};
console.log(o.__proto__);
console.log(hu.__proto__ === Person.prototype);// true
console.log(hu.__proto__.__proto__ === Object.prototype);// true
// console.log(new Person('小公主', 18)); 

// 原型链
// 原型链的查找机制  从下往上查找
// 1.先查找当前对象的属性和方法
// 2.如果没有，就去原型对象中查找
// 3.如果没有，就去原型对象的原型对象中查找
// 4. 以此类推
// 5. 如果没有，就返回 undefined
console.log(hu.toString());//[object Object]