// 函数对象
function add(){
    // 下标访问第几个参数 数组
    // arguments （类数组）函数运行时，参数总管
    // 下标访问几个参数 数组
    // 类数组，有length属性，可以for，但是没有数组太多的方法
    // 如何将类数组转成真正的数组？
    const args = Array.from(arguments);
    console.log(Object.prototype.toString.call(args));//[object Array]
    // console.log(arguments.map(item=>item+1));  不可以
    let result=0;
    // console.log(arguments,arguments.length,Object.prototype.toString.call(arguments),'///');
    for(let i=0;i<arguments.length;i++){
        // console.log(arguments[i]);
        result+=arguments[i];
    }
    return result;
}
// console.log(add.length);
console.log(add(1,2,3));