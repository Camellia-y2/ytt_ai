console.log(0/0);//NaN
console.log(typeof NaN);//number
console.log(Math.sqrt(-1));// js 内置的Math对象 NaN

console.log(parseInt("123"));// 123
console.log(parseInt("123a"));// 123
console.log(parseInt("a123"));// NaN
console.log(parseInt("123a456"));// 123
console.log(parseInt("123a456b"));// 123

console.log(Number(undefined));// NaN
console.log(Number(null));// 0
console.log(Number(true));// 1
console.log(Number(false));// 0

console.log(NaN===NaN);// false   NaN 不等于任何值，包括它自己。 Not a Number 是一个特殊的值，用于表示一个非数字的值。
//Not a Number 的方式不一样，所以不能直接用 === 来判断。

console.log(isNaN(NaN),isNaN(0/0));// true  true  isNaN() 函数用于检查一个值是否为 NaN。如果值是 NaN，则返回 true；否则返回 false。