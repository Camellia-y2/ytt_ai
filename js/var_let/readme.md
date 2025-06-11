## 函数的申明
- 返回的结果是函数本身
- 如果是严格模式，他会报错 => TypeError: Assignment to constant variable.
- 严格模式 "use strict"; 
   - 严格模式要求不能使用未声明的变量，否则会报错。如 b本来为函数类型，b=20会修改为数字类型，报错。
   - 对js更严格
   - 函数名b在函数体内内部是局部变量，它是只读的。函数的优先级更高。
   - 虽然js是弱类型，可以随意修改，但是函数在函数体内是只读的。
- 非严格模式：允许修改声明后的变量的类型，如 b本来为函数类型，b=20不会报错，b为数字类型。

## JS 运行环境有哪些？
- 严格模式 
- 非严格模式
- node 服务器端
- 浏览器端  （考试以这个为主）

## 为什么 var 申明的变量在前端浏览器会挂载到 window 上？
- a , f 都是全局变量
- es5之前：全局变量和顶层对象 window(前端) 的属性是等价的。
  - 当初的设计所为
- es6之后：const, let 不会挂载到顶层对象 window 上。
  - 因为这种模式会污染顶层对象，所以要ban掉。
  - 只是在一个块级作用域（Script）中，最顶的块。
  - 脚本中放置块级作用域：<script></script>
  - TDZ里面。
    var a = 1;       // 挂载到 window，可通过 window.a 访问
    let b = 2;       // 不挂载到 window，window.b 为 undefined
    const c = 3;     // 不挂载到 window，window.c 为 undefined
    function f() {}  // 挂载到 window，可通过 window.f 访问

## this 
- this 是什么？
  - 函数**执行**的时候，会立即生成的对象，叫 this
    有调用方式决定，指向最后的调用者。
    1.普通函数方式运行， this 指向 window
    严格模式下， this 指向 undefined，没有必要。
    2.对象的方法，指向事件对象
    3.事件处理函数来运行，指向事件对象
    4.箭头函数：本身没有this，其实是作用域链中的this，沿用外层的this。