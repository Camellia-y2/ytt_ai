const arr=[1,2,3];

const o=new Object();
const date=new Date();
// console.log( typeof arr); //object
// console.log(date.setFullYear(2024));
// // 如何区分object的这些类型？
// console.log( Object.prototype.toString.call(arr)); //[object Array]  原型链上的方法
// console.log( Object.prototype.toString.call(date));


// 会在MND看一些资料
function getType(value){
    // console.log( Object.prototype.toString.call(value));
    // spring api 的选择
    // split + substring
    // splice
    return Object.prototype.toString.call(value).splice(8,-1);
}

console.log(getType(arr));
// console.log(typeof Object.prototype.toString.call(arr));
