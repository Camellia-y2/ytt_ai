// 定义函数类型
interface AddFn {
    // (参数类型):返回值类型
    (a: number, b: number): number
}

// (参数类型)=>返回值类型
type AddType = (a: number, b: number) => number

// 类型别名
type NumberOther = number;

let a:NumberOther = 10;
