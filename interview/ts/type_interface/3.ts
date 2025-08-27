interface Animal {
    name: string
}
// 可以重复声明，自动类型合并
interface Animal {
    age: number
}
const dragon: Animal = {
    name: '小粉',
    age: 18
}

type AnimalType = {
    name: string;
}
// 不可以重复声明
// type AnimalType =  {
//     age: number
// }