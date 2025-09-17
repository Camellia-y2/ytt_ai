/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const size = nums.length;
    if(size === 0) {
        return 0;
    }
    let lastIndex = 1;
    for(let fastIndex = 1; fastIndex < size; fastIndex++){
        if(nums[fastIndex]!=nums[lastIndex - 1]){
            nums[lastIndex] = nums[fastIndex];
            lastIndex++;
        }
    }
    return lastIndex;
};