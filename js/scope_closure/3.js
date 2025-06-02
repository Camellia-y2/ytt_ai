function bar() {
    var myName = "极客世界"
    // var test=10  //有这句时，结果输出10，没有这句时，结果输出1
    //当前 if 块词法环境 → 无 test
    // bar 函数词法环境 → 有 test1，无 test
    // bar 函数变量环境 → 无 test （这里）
    // 全局词法环境 → 找到 test: 1
    let test1 = 100
    if (1) {
        let myName = "Chrome浏览器"
        console.log(test) // 从上层作用域中查找test，找到let test = 1，输出1
        // 为什么不去foo中的快作用域找？？？
        // 因为块级作用域是一个独立的作用域，它不会影响到上层作用域。
        // 遵循的是词法作用域的规则，即作用域链是按照代码的书写顺序来确定的。
        // 所以，在bar函数中，即使有一个块级作用域，也不会影响到上层作用域的作用域链。
    }
}
function foo() {
    var myName = "极客邦"
    let test = 2
    { // 块级作用域
        let test = 3 //私有的
        bar()
    }
}
var myName = "极客时间"
let myAge = 10
let test = 1
foo() // 1


