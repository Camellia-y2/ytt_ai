const target = {
    a: 1,
}
const source = {
    // 对象的嵌套 (深度拷贝，引用赋值，不可以使用Object.assign)
    b: {
        name: '小明',
        hobbies: ['篮球', '足球']
    },
    // 简单数据类型（浅拷贝，可以使用Object.assign）
    c: 1
}


// 常用的深拷贝
const newObj = JSON.parse(JSON.stringify(source));
// JSON.parse() 会返回新的对象，不会改变原对象
console.log(newObj);
newObj.b.name='小红'
newObj.c = 2
console.log(newObj); // { b: { name: '小红', hobbies: [ '篮球', '足球' ] }, c: 2 }
console.log(source); //{ b: { name: '小明', hobbies: [ '篮球', '足球' ] }, c: 1 }

