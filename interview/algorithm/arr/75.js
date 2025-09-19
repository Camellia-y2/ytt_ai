/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const length = nums.length;
    let left = 0; // 左边放0
    let right = length - 1; // 右边放2
    let i = 0; // 中间放1
    while(i <= right){
        if(nums[i] === 0){
            [nums[left],nums[i]] = [nums[i],nums[left]]; // 交换
            left++; //left放的一定是0，可以向前
            i++;
        }else if(nums[i] === 1) {
            i++; // 放中间，不做任何操作，直接往前
        }else{
            [nums[i],nums[right]] = [nums[right],nums[i]];
            right--; // 不许i++，因为不知道换过去i的值是多少，还要再判断
        }
    }
};