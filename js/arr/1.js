// {}是对象 key:value O(1) 像HashMap Map
// 数组作为第一种重要的数据结构
// 第二种重要的数据结构 链表、队列、栈
// 其他语言 数组是定长的，js 数组是变长的
// 可以、动态自动扩容
const arr = [1, 2, 3, 4, 5];
const arr2 = new Array(5).fill(undefined); // 5个undefined
arr2.fill(1, 2, 4); // 从2到4填充1 实例方法
console.log(arr2);
arr2[8] = undefined;
// console.log(arr2);
// for (let key in arr2) { // 迭代器
//     console.log(key, arr2[key]); 
// }
// for (let item of arr2) { // 迭代器
//     console.log(item); // 
// }

