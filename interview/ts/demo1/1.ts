let a: any = 1; // any 任何类型，ts新手，狂用any
a = "1" // 不能滥用any, 学会使用泛型
// function getFirstElemet(arr: any[]): any {
//     return arr[0]
// }

// const numbers = [1,2,3]
// const firstNumber = getFirstElemet(numbers)

// const strs = ["a", "b", "c"]
// const firstStr = getFirstElemet(strs)

// // 复用这个函数的同时，传入一个类型参数

function firstElement<T>(arr: T[]): T | undefined{
    return arr.length>0?arr[0]:undefined
}

const strings = ["hello", "world"]
const firstString = firstElement(strings) // ts类型推导

// const numbers2 = [1,2,3]
// const firstNumber2 = firstElement<number>(numbers2)
// firstNumber2?.toFixed(2)


