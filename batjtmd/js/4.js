// 全局的 js 代码在执行之前会有一个编译的过程 
// var 有变量提升
// let 没有变量提升

// 全局作用域
function fn(){ // 函数作用域
     let c=2;
     if(true){ // let支持块级作用域, var不支持块级作用域
        let d=5;
    }
    console.log(d);
}
if(false){ // 块级作用域
     var a=1;// undefined
     let b=2;// error
}
console.log(a);