/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0; // 记录总长
    // 滑动窗口（双指针）
    let minLength = Infinity; // 记录最小长度  Infinity “无穷大”
    let j = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        while(sum >= target){
            minLength = Math.min(minLength, i - j + 1); // 更新最小长度
            sum -= nums[j]; // 减去起点元素
            j++; // 移动起点指针
        }
    }
    return  minLength === Infinity ? 0 : minLength;
};

minSubArrayLen(7, [2,3,1,2,4,3]);