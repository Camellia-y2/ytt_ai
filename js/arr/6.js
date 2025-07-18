const arr = [1, 2, 3, 4, 5];
// 可迭代对象 比技术循环好理解 可读性好
for (let item of arr) { // 迭代器
    console.log(item); //
}

// for of 如果要拿到item 还要拿到index？
// for (const [index, item] of arr.entries()) { // 迭代器
//     // 每一项都是数组，第一项是key，第二项是值
//     console.log(index, item); //
// }

console.log(arr.entries())