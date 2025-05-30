// 如何正确输出‘极客’？？？


// 方法1：通过参数传递
// function bar(name){
//     console.log(name);
// }
// function foo(){
//     let myName = '极客';
//     bar(myName); // 显式传递参数
// }
// foo(); // 输出：极客

// 方法2：使用闭包
function foo1(){
    let myName1 = '极客';
    function bar1(){ // 此时bar的作用域包含foo的作用域
        console.log(myName1);
    }
    bar1(); // 直接调用闭包
}
let myName1 = '极客2';//被遮蔽了
foo1(); // 输出：极客


function foo2(){
    let myName2 = '极客';
    function bar2(){ // 此时bar的作用域包含foo的作用域
        console.log(myName2);
    }
    return bar2; // 返回闭包
}
let myName2 = '极客2';//被遮蔽了
let f=foo2(); // 输出：极客
f(); // 输出：极客
