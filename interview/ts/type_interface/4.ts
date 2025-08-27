type ID = number | string // 联合类型 或
type Point = [number, number, string] // 元祖类型：一组类型的声明，数组中值的类型不一样

// 不支持
// interface ID2 = number | string

// 可以 ，只能定义对象结构
interface ID2 {
    id: number | string
}

