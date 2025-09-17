/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let prefixSum = [];// 前缀和数组
    const length = nums.length;
    prefixSum.push(nums[0]);
    for(let i = 1; i < length; i++){
        prefixSum.push(prefixSum[i - 1] + nums[i]);
    }

    let centerIndex = 0; // 中心下标
    while(centerIndex < length){
        let leftSum = prefixSum[centerIndex - 1];
        let rightSum = prefixSum[length - 1] - prefixSum[centerIndex];

        if(centerIndex === 0){
            if(rightSum === 0) return centerIndex;
        }else if(centerIndex === length - 1){
            if(leftSum === 0) return centerIndex;
        }else if(rightSum === leftSum){
            return centerIndex;
        }
        centerIndex++;
    }
    return -1;
};

console.log(pivotIndex([2,1,-1]));