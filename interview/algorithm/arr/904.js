/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    if(fruits.length<=2) return fruits.length;
    const length = fruits.length;

    let len = 1; // 记录可采摘的最大数量
    let left = 0; // 左窗口
    const count = new Map(); // 记录当前窗口中每种水果的数量

    for(let right = 0;right < length; right++){
        // 扩展右边界
        const rightFruit = fruits[right];
        count.set(rightFruit, (count.get(rightFruit) ?? 0) + 1);
       
        // 如果种类超过 2，收缩左边界
        while (count.size > 2) {
            const leftFruit = fruits[left];
            count.set(leftFruit, count.get(leftFruit) - 1);
            if (count.get(leftFruit) === 0) {
                count.delete(leftFruit); // 移除数量为 0 的水果
            }
            left++;
        }
        len = Math.max(len , right - left + 1);
    }

    return len;
};