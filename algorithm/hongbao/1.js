/**
 * 微信红包随机分配算法
 * @param {number} total - 总金额（单位：分）
 * @param {number} num - 红包数量
 * @returns {number[]} - 每个红包的金额数组
 */
function hongbao(total, num) {
    const result = [];
    let restAmount = total; // 剩余金额
    let restNum = num;      // 剩余数量
    
    for (let i = 0; i < num - 1; i++) {
        // 计算当前红包的最大可能金额：剩余金额/剩余数量×2
        const max = (restAmount / restNum) * 2;
        // 随机生成0到max之间的金额（向下取整）
        const amount = Math.max(1, Math.floor(Math.random() * max));//除去生成0的情况，当为0时选1
        // 更新剩余金额和数量
        restAmount -= amount;
        restNum--;
        // 将当前红包金额存入结果数组
        result.push(amount);
    }
    
    // 最后一个红包直接分配剩余金额
    result.push(restAmount);
    return result;
}

// 使用示例
const amounts = hongbao(1000, 10); // 1000元发10个红包
console.log(amounts); 