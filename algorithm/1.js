/**
 * 
 * @param {*} num1 字符串
 * @param {*} num2 字符串
 * @returns {string}
 */

function addLargeNumbers(num1, num2) {
    let result = '';
    let carry = 0; // 存储进位
    let i = num1.length - 1; // 从最低位开始
    let j = num2.length - 1; // 从最低位开始
    while (i >= 0 || j >= 0 || carry > 0) {
        //边界
        const digit1 = i >= 0 ? parseInt(num1[i]) : 0; // 转换为数字
        const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
        const sum = digit1 + digit2 + carry; // 相加
        result = sum % 10 + result; // 存储结果
        carry = Math.floor(sum / 10); // 计算进位
        i--; // 指针左移
        j--; // 指针左移
    }
    return result;
}