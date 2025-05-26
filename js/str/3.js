// 1. 创建基本字符串和字符串对象
let a = "abc";                  // 基本字符串值
let b = new String("abc");      // 字符串对象（包装类实例）

// 2. 比较操作符的行为差异
console.log(a == b);            // true：值相同
console.log(a === b);           // false：类型不同（string vs Object）

// 3. instanceof 检测原型链
console.log(a instanceof String);  // false：基本类型不是对象实例
console.log(a instanceof Object);  // false
console.log(b instanceof String);  // true：b 是 String 构造函数创建的对象
console.log(b instanceof Object);  // true：所有对象都继承自 Object

// 4. 自动装箱机制
console.log(b.split(''));       // ["a", "b", "c"]：对象直接调用方法
console.log(a.split(''));       // ["a", "b", "c"]：基本类型临时包装为对象调用方法
/**
 * JavaScript 自动装箱（Autoboxing）详解
JavaScript 的自动装箱机制是一种隐式转换，当你对基本类型值调用对象方法（如 split()、toUpperCase()）时：
1.JavaScript 会临时创建一个包装类对象（如 new String(a)）
2.在这个临时对象上调用方法
3.丢弃临时对象，保持变量的原始基本类型
这就是为什么基本字符串 a 可以调用 split() 方法的原因。这种设计让开发者可以统一使用面向对象的语法，而不必手动处理基本类型和对象之间的转换。
 */

let num1=new Number(123);
let num2=123;
console.log(num1);//123
console.log(num2);//123
console.log(num1==num2);//true
console.log(num1===num2);//false
//类型不同
//instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
// 其返回值是一个布尔值。
/**
 *
 *  typeof vs instanceof：
    typeof "abc" 返回 "string"
    typeof new String("abc") 返回 "object"
    instanceof 只对对象实例有效，基本类型永远返回 false
 */
console.log(num1 instanceof Number);//true
console.log(num1 instanceof Object);//true
console.log(num2 instanceof Number);//false
console.log(num2 instanceof Object);//false

/**
 * 1. 先将num1包装为对象类型
 * 2. 调用对象的valueOf方法，得到原始值
 * 3. 再进行比较
 **/
console.log(num1.valueOf());//123
console.log(num1.valueOf()==num2);//true
console.log(num1.valueOf()===num2);//true
/**
 * 1. 先将num1包装为对象类型
 * 2. 调用对象的toString方法，得到原始值
 * 3. 再进行比较
 **/
console.log(num1.toString());//"123"
console.log(num1.toString()==num2);//true
console.log(num1.toString()===num2);//false
console.log(num1.toString() instanceof String);//false
console.log(num1.toString() instanceof Number);//false
console.log(num1.toString() instanceof Object);//false

//typeof 运算符返回一个字符串，表示操作数的类型。
console.log(typeof num1);//object
console.log(typeof num2);//number
console.log(typeof num1.valueOf());//number
console.log(typeof num1.toString());//string
console.log(typeof null);//object  特殊
