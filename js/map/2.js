// parseInt num
['1', '2', '3'].map((num,index,arr)=>{
    // console.log(parseInt(num));
    console.log(num,index,arr);
    return num;
})


// parseInt 解析
// 1.基本语法：
parseInt(string)  // 默认为10进制
parseInt(string, radix)  // radix 进制

console.log(parseInt("123"));
// 123 (default base-10)
console.log(parseInt("123", 10));
// 123 (explicitly specify base-10)
console.log(parseInt("   123 "));
// 123 (whitespace is ignored)
console.log(parseInt("077"));
// 77 (leading zeros are ignored)
console.log(parseInt("1.9"));
// 1 (decimal part is truncated)
console.log(parseInt("ff", 16));
// 255 (lower-case hexadecimal)
console.log(parseInt("0xFF", 16));
// 255 (upper-case hexadecimal with "0x" prefix)
console.log(parseInt("xyz"));
// NaN (input can't be converted to an integer)

//2. 面试题解析
// map第一个参数传入的是字符串，第二个参数是进制数，第三个参数是数组
// 所以parseInt 会被执行三次，每次传入的参数分别是：
parseInt('1',0,['1', '2', '3']) 
parseInt('2',1,['1', '2', '3'])
parseInt('3',2,['1', '2', '3'])
// parseInt中第二个参数是进制数
// 0 代表 0进制 1 代表 1进制 2 代表 2进制 以此类推
// 0进制：逢零进一，永远不会出现大于0的数，所以输出的是1
// 1进制：逢一进一，永远不会出现大于1的数，所以会被忽略，所以输出的是NaN
// 2进制：逢二进一，永远不会出现大于2的数，所以会被忽略，所以输出的是NaN

console.log(['1','2','3'].map(parseInt))
// 输出 [1, NaN, NaN]
