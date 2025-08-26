let arr = [1,3,2]

// 升序
// console.log(arr.sort((a,b) => a-b)) 
//  降序
// console.log(arr.sort((a,b) => b-a))

// 默认不给 按照 字符串 Unicode 编码（ASCII 码是其中一部分）排序
// 按字符排，和数值不一样的，从第一个字符比
console.log([10, 1, 20, 3, 5].sort()) // [ 1, 10, 20, 3, 5 ]

console.log([1,2,3].reverse()) // [ 3, 2, 1 ]

console.log([1,2,3,4].fill(0,1,3))