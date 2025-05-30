/**
 * 
 * @param {number} total 
 * @param {number} num 
 * @returns {number[]}
 */
function hongbao(total,num) {
    const arr=[];
    let resAmount = total;//剩余金额
    let resNum = num;//剩余个数
    for(let i=0;i<num-1;i++){
        //Math 包装类
        let amount = Math.random(resAmount/resNum*2).toFixed(2);
        resAmount -= amount;
        resNum --;
        arr.push(amount);
    }
    arr.push(restAmount.toFixed(2));//最后一个红包直接分配
    //公平性 平均性 随机性
    return arr;
}