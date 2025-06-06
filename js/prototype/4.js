function Person(name, age) {
    // this 指向当前实例化的对象
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello =  function() {
    console.log('Hello, my name is ' + this.name);
}


var hu = new Person('吉他胡', 18);
console.log(hu.__proto__ === Person.prototype);// true
var a = {
    name: '孔子',
    eee:'鹅鹅鹅',
    country: '中国',
}
// 可以修改原型对象
hu.__proto__ = a;
console.log(hu.__proto__ === Person.prototype);// false
console.log(hu.__proto__ === a);// true

console.log(hu.country);//拥有了 a 的属性
console.log(Person.prototype);//{ sayHello: [Function: sayHello] }
console.log(Person.prototype.constructor==Person);//true
console.log(hu.__proto__.constructor==Person);//false

console.log(hu.eee,hu.name);//'鹅鹅鹅' ’吉他胡‘