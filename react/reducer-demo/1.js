// 纯函数
// 纯函数是指相同输入始终返回相同输出，且不产生副作用（如修改外部变量）、不操作外部变量、不发请求、不改DOM 的函数。、
// 管理数据状态 用纯函数去管 全局状态更正确
// 全局状态更重要，一堆的地方都要用到它，修改值，遵守一定的规则，流程
function add(a, b) {
    return a + b;
}

// 不纯的
// 1.
function add1(a, b, obj) {// 非纯函数，因为它修改了外部变量 obj 引用变量
    obj.item = '111'; // 副作用：修改了外部变量 obj 
    return a + b;
}

// 2.
let total = 0;
function addToTotal(a) {
    total += a; // 副作用：修改了外部变量 total 且 输入相同值不一定返回相同值
    return total;
}