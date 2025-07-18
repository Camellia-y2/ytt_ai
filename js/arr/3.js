const arr = new Array(5)
console.log(arr[0]); // undefined 已经把他第一个值索引拿出来用了，所以不是empty
// 薛定谔的猫？
// 那如何检查？
console.log(arr.hasOwnProperty(0)); 
// hasOwnProperty() 是 JavaScript 中 Object.prototype 的一个方法，
// 用于判断一个对象自身是否具有指定的属性（键），不包括从原型链继承来的属性。
let obj = {
    name: 'Alice',
}

let obj2 = {
    skill: 'JavaScript',
}
obj2.__proto__ = obj; // 原型链
console.log(obj2.skill)
console.log(obj2.hasOwnProperty('skill')); // true 自身有这个属性
console.log(obj2.hasOwnProperty('name')); // false 自身没有这个属性，但是原型链上有这个属性

for (let key in obj){
    console.log(obj[key]); //Alice
}