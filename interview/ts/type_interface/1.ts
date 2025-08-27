// js 是弱类型语言, 容易出问题
// ts是js的超集，ts带来类型的约束
// ts 是微软 想让java工程师写前端
// raect + ts 是开发的标配
// 自定义类型
// interface 关键字
interface UserDemo {
    name: string; // 不是JSON, 不能用,隔开
    age: number
}
// 相同点：都可以用来声明自定义类型
type UserType = {
    name: string
    age: number
}

const u1: UserDemo = {
    name: '张三',
    age: 18
}
const u2: UserType = {
    name: '张三',
    age: 18
}