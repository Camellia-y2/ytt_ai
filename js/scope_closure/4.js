function foo() {
    var myName = "极客时间"
    let test1 = 1
    const test2 = 2
    var innerBar = { //闭包 的outer指向被他嵌套的函数的作用域
        // 闭包的作用域链：innerBar的作用域 → foo的作用域 → 全局作用域
        getName:function(){
            console.log(test1)//1
            return myName
        },
        setName:function(newName){
            myName = newName
        }
    }
    return innerBar
}
var bar = foo()// 函数嵌套函数，外部访问的时候
// 沿着词法作用域链，找到它声明的时候的函数中的变量
// 函数就好像有个背包一样，里面放着外层函数的变量
bar.setName("极客邦") 
bar.getName() // 1
console.log(bar.getName()) // 1 极客邦