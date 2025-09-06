// 栈模拟
function flatten(arr) {
    // stack 递归LIFO
    const stack = [...arr];
    const res= [];
    while(stack.length) {
        const item = stack.pop();
        if(Array.isArray(item)){
            stack.push(...item);
        } else{
            res.push(item);
        }
    }
    return res.reverse();// 后进先出的，等到所有都扁平化好，再反转输出
}
const arr=[1,2,3,[4,5]]
console.log(flatten(arr));