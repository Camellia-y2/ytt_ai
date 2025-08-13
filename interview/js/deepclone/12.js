let arr1 = [
    {
        name: '张三',
        age: 18,
        hobbies: ['篮球', '足球']
    }
]

let arr3 = [
    {
        name: '张三',
        age: 18,
        hobbies: ['篮球', '足球']
    },
    function () {
        console.log('函数拷贝不了')
    }
]

let arr2 = JSON.parse(JSON.stringify(arr1)) // 可以实现深拷贝
arr2[0].name = '张三（深拷贝）'
arr2[0].hobbies.push("跑步")
console.log(arr2, arr1) 
// [ { name: '张三（深拷贝）', age: 18, hobbies: [ '篮球', '足球', ' 跑步' ] } ] 
// [ { name: '张三', age: 18, hobbies: [ '篮球', '足球' ] } ]

let arr4 = JSON.parse(JSON.stringify(arr3)) // 无法拷贝函数 ，因为函数无法序列化
console.log(arr4) // [ { name: '张三', age: 18, hobbies: [ '篮球', '足球' ] }, null ]

