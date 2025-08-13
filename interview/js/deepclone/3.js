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

Object.assign(target, source);
target.b.name = '小绿';
target.b.hobbies.push('跑步');
target.c = 2;

console.log(source.b.name, source.b.hobbies, source.c);  // 被拷贝的对象被修改了，但是简单数据类型不会被修改





