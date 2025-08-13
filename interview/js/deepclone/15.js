let obj = {a:1, b:2}
// 太常用，大型语言都内置的， [] {}
// HashMap 字典 0 (1) key:value
const target = new Map(); // 实例化es6新的数据结构 强
target.set('c', 3)
console.log(target.get('c'))
target.set(obj, 4);
obj = null
console.log(target.get(obj))

let obj2 = {name: '释永信'}
const target2 = new WeakMap() // weak 弱的,对内存回收机制很敏感
target2.set(obj2, 'code 秘密花园')
obj2 = null; // 内存垃圾回收
console.log(target2.get(obj2))
