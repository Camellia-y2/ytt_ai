// 有两个容器，盒子A 放有钥匙，钱包；盒子B 放有手机，充电宝

const target = {a: 1};
const source = {b: 2};

// 不是原型链上的方法，不用new就可以使用
const result = Object.assign(target, source);
console.log(result, target); // { a: 1, b: 2 } { a: 1, b: 2 }
result.a = 11;
console.log(result, target); // { a: 11, b: 2 } { a: 11, b: 2 }
