function bar(){
    console.log(myName);//'骑士'
}
function foo(){
    let myName = '极客';
    bar();
    console.log(myName);//变量遮蔽 '极客'
}
let myName = '骑士';
foo();

// 为什么不用foo中的变量？而用全局作用域中的变量？
// JavaScript 采用词法作用域（Lexical Scoping），即函数的作用域在定义时就确定了，而不是在调用时确定。
// - bar函数在定义时，其作用域链为：bar的作用域 → 全局作用域
// - 当bar内部访问myName时，它会首先在自己的作用域中查找，然后在全局作用域中查找

// 代码实际执行顺序（简化版）
// function bar(){...} // 函数声明被提升到顶部
// function foo(){...} // 函数声明被提升到顶部

// let myName; // let变量声明被提升，但未赋值
// foo(); // 调用foo
// myName = '骑士'; // 变量赋值在调用之后


// 执行流程详解
// 1.全局作用域初始化：
    // bar和foo函数被提升到全局作用域顶部
    // 全局变量myName被声明，但未赋值（值为undefined）
// 2.调用foo()：
    // 创建foo的执行上下文
    // 在foo的作用域内声明局部变量myName并赋值为'极客'
    //调用bar()函数
// 3.执行bar()：
    // 创建bar的执行上下文
    // 在bar的作用域内查找myName，未找到
    // 沿作用域链向上查找，在全局作用域中找到myName，此时其值为'骑士'（因为全局变量赋值在foo()调用之后已经完成）


    