/**
 * @func 两数之和
 * @param {number} a 
 * @param {number} b 
 * @returns {number} 
 */
// 函数编写
// 函数调用
// 健壮性
// typeof 运算符 
// 判断简单数据的类型，除了null（object）都可以判断
// 返回值是类型的字符串 
function add(a,b){
    // 参数的校验
    if(typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)){
        throw new TypeError('a 和 b 必须是数字')
    }
    return a+b;
}
console.log(add(1,NaN));
console.log(typeof NaN);
//NaN 是一个特殊值，全称为 “Not a Number”，表示一个非数字的值，通常在数学运算无法得到有效数字结果时返回。
