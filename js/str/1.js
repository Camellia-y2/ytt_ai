/**
 * @func 反转字符串
 * @param {string} str 
 * @returns {string}
 */
function reverseString(str) {
    //str是什么类型？ 字符串 简单数据类型 primitive
    return str.split('').reverse().join('');
}

//函数表达式

// es5 函数表达式
// const reverseString = function (str) {
//     return str.split('').reverse().join(''); //函数体
// }    

// es6 箭头函数 简洁 function 不要了 用箭头代替
// {}也省了 只有一句话的时候
// 他是返回值的时候 连retunr也省了
// 只有一个参数的时候 （）也省了
// 箭头函数的this指向 箭头函数的this指向 是定义的时候的this指向 不是调用的时候的this指向
const reverseString = str => str.split('').reverse().join('');//箭头函数
console.log(reverseString('hello')); //olleh