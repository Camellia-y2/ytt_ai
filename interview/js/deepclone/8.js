const s = Symbol('id') // 独一无二
const source = {
    [s]: 123, // 作为对象属性，独一无二
    a: 1
}
const target = []
Object.assign(target, source)
console.log(target) // [ a: 1, [Symbol(id)]: 123 ]  symbol可枚举
