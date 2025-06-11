// 一句代码
// v8 引擎
// 变量提升
// 编译阶段
// 执行阶段
// 全局作用域中的变量

// 走到 window? 前端方式来运行
// 在浏览器环境中， window 是 JavaScript 的全局对象，
// 所有全局作用域中声明的变量和函数都会成为 window 对象的属性 。
// 这与 Node.js 环境中的全局对象 global 不同，是浏览器特有的运行时概念。
var a = 1;
console.log(window.a);//ReferenceError: window is not defined  用node运行报错，因为后端没有window对象
// var 声明与 window 的关系 ：
// 代码中的 var a = 1 在全局作用域下声明变量时，会自动成为 window 对象的属性

// 与 let/const 的区别 ：
// 如果使用 ES6 的 let 或 const 声明全局变量，则不会挂载到 window 对象

console.log(global.a); // node 顶层对象
