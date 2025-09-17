/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 法一：快慢指针法
var backspaceCompare = function(s, t) {
    s = s.split('');
    t = t.split('');
    function processString(arr){
        let slow = 0;
        for(let fast = 0; fast < arr.length; fast++){
            if(arr[fast] !== '#'){
                arr[slow] = arr[fast];
                slow++;
            } else {
                slow = Math.max(0, slow - 1); // 防止slow-1为负数
            }
        }
        return arr.slice(0, slow).join(''); // 拼接回字符串
    }
    s = processString(s);
    t = processString(t);
    return s === t;
};

// 法二：栈
var backspaceCompare = function(s, t) {
    function build(str) {
        const stack = [];
        for (const char of str) {
            if (char === '#') {
                stack.pop(); // 退格：删除最后一个字符
            } else {
                stack.push(char); // 输入字符
            }
        }
        return stack.join(''); // 转成字符串
    }

    return build(s) === build(t);
};


console.log(backspaceCompare("a#c", "a##c"))