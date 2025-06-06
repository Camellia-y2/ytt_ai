// NaN
// parseInt 字符串转数字 JS 前端场景
// input 输入 -》 Number

// map 要接受函数作为参数
// foreach 遍历数组
//  forEach([1,2,3], item => {
//   console.log(item)
// }) 

console.log(['1','2','3'].map(parseInt))
// 输出 [1, NaN, NaN]
// 期待输出 [1,2,3]