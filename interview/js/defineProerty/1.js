// Object.defineProperty
var obj = {}; // 对象
// es5就提供的api  兼容性更好
// react 和 vue 最新版 对浏览器有要求
Object.defineProperty(obj, "num", {
    value: 1,
    // 属性描述
    configurable: true, // 可配置，是否可以删除属性，是否可以修改属性描述符
    writable: false, // 可以自己修改属性值
    enumerable: true, // 可以自己遍历(枚举)属性

    // get: function(){
    //     console.log('读取了属性')
    //     return 1
    // }
})
// obj.num = 2
// console.log(obj.num)
// delete obj.num
// console.log(obj.num)

for(let key in obj){
    console.log('枚举')
    console.log(key + ':' + obj[key])
}

console.log(Object.getOwnPropertyDescriptor(obj, 'num')) // { value: 1, writable: false, enumerable: true, configurable: true } 

Object.defineProperty(obj, 'name', {
    writable: true // 只配置了一项，另外两个就是false
})
obj.name='Bob'
console.log(obj.name)
console.log(Object.getOwnPropertyDescriptor(obj, 'name')) // { value: 'Bob', writable: true, enumerable: false, configurable: false }

// 枚举
for(let key in obj){
    console.log(key)
}

