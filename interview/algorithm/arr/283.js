/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const size = nums.length;
    if(size <= 1) return nums;
    let lastIndex = 0;
    for(let fastIndex = 0; fastIndex < size; fastIndex++){
        if(nums[fastIndex] != 0){
            nums[lastIndex] = nums[fastIndex];
            lastIndex++;
        }
    }
    // 把后面的补上0
    for(let i = lastIndex; i < size; i++){
        nums[i] = 0;
    }
};