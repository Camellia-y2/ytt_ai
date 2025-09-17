/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let stack = [];
    for(let i = 0; i < nums.length; i++){
        stack.push(nums[i] * nums[i]);
        console.log(nums[i])
    }
    stack.sort((a, b) => a - b);
    return stack;
};

console.log(sortedSquares([-4,-1,0,3,10]))