const target = {
    a: 1
}

// 源对象可以是简单数据类型，不会报错，直接忽略
Object.assign(target, null);
Object.assign(target,undefined);
console.log(target);

// 目标对象必须传，否则会报错
// Object.assign(undefined, {a:1})
// 源对象可以不传，不会报错，直接忽略
const obj = {name: "张三"}
Object.assign(obj)