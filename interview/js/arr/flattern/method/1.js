const arr = [1, 2, 3, 4, 5]
const removed = arr.splice(2, 2) // [ 1, 2, 5 ]
console.log(arr)
console.log(removed) // [ 3, 4 ]

// 如果不修改原数组呢？移除但又不改变原数组 splice不能用
const arr2 = [1, 2, 3, 4, 5]
const arr3 = arr2.slice(0, 2) // [ 1, 2 ]
console.log(arr2)
console.log(arr3)
//arr2.slice(3); // [ 4, 5 ]
const newArr = arr2.slice(0, 2).concat(arr2.slice(3))

console.log(newArr) // [ 1, 2, 4, 5 ]