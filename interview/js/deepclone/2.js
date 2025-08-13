const target = {
    a: 1,
    b: 2,
}
const source = {
    b: 3,
    c: 4,
}

// 后来居上
const result = Object.assign(target, source); // 有相同属性，会覆盖
console.log(result, target); // { a: 1, b: 3, c: 4 } { a: 1, b: 3, c: 4 }

