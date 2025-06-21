// 完成的功能
// function objectFactory(){
//     // const obj = new Object(); // 1. 创建一个空对象
//     // 1. 创建一个空对象
//     // const obj = Object.create(null); 
//     const obj = {};

//     // [].shift 方法 -> 取出数组的第一个元素，并返回这个元素，同时原数组长度减1
//     // call 方法 -> 改变this指向，一开始指向前面的数组，后面改成了后面的对象
//     // call 方法 -> 调用一个对象的一个方法，以另一个对象替换当前对象，借用数组的shift方法。
//     // 因为 arguments 是类数组，没有真正数组的shift方法，所以可以使用 [].shift.call(arguments) 来取出第一个参数
//     // 2. 取出第一个参数，就是我们要传入的构造函数
//     const Constructor = [].shift.call(arguments); 
//    // 3. 把obj的原型指向构造函数的原型，这样obj就可以访问到构造函数中的属性和方法了
//     obj.__proto__ = Constructor.prototype;
//     // 4. 把obj作为构造函数的this指向，这样obj就可以访问到构造函数中的属性和方法了
//     const result = Constructor.apply(obj,arguments); 

//     // 5.  如果构造函数返回的是一个对象，那么就返回这个对象，否则就返回obj，尊重构造函数的返回值（构造函数也是个函数）
//     // 解法一
//     // return result instanceof Object ? result : obj;

//     // 解法二 
//     // typeof null 返回 "object"（JS 早期设计缺陷，实际 null 是独立的空值类型），
//     // 而 null instanceof Object 返回 false（null 没有原型链）。
//     // return typeof result === 'object' ? result : obj;
//     // 可以加 || , 当result为null时 为 false，返回obj，忽略返回简单数据类型的情况
//     return typeof result === 'object' ? result || obj : obj;
// }

// es6改进版本
function objectFactory(Constructor,...args){
    const obj = {};
    // const Constructor = [].shift.call(arguments); 
    obj.__proto__ = Constructor.prototype;
    const result = Constructor.apply(obj,args); 
    return typeof result === 'object' ? result || obj : obj;
}

function Person(name,age){
    this.name = name;
    this.age = age;

    // return 1;
    // return {
    //     name:name,
    //     age:age
    // }
    return null;
}

Person.prototype.sayHi = function(){
    console.log('你好，我是' + this.name);
}

// let p = new Person('zs',18);
// p.sayHi();

let p = objectFactory(Person,'张三',18);
console.log(p); // Person {name: '张三', age: 18}
// p.sayHi(); // 你好，我是张三
console.log(p instanceof Person); // true


// new Person(..) -> function [[constructor]] -> {} && this指向{} -> [[call]]
// -> 返回constructor -> {}.__proto__ => Person.prototype -> return {}