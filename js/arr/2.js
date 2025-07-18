// fill 初始化一样的值
// of 不同值的初始化
// 这是 Array 的静态方法，不是数组实例的方法(不在原型上)，要在对象上调用。
// 所以不能用 arr.of() 这样调用。
console.log(Array.of(1,2,3)) // 将值变为数组遍历
// 复杂的计算或转变
console.log(Array.from(new Array(26),(val , index) => String.fromCodePoint(65 + index)))
// 虽然 new Array(26) 创建的是“空槽”，但 Array.from() 在处理时会忽略空槽，
// 所以即使数组是空的，只要它有 .length，Array.from() 也能正常工作。