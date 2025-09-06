// 递归
const flatten = arr => {
    let res = [];
    for(let item of arr) {
        if(Array.isArray(item)) {
            // 是数组，就先递归扁平化成一维数组，有很多元素，就直接拼接
            res = res.concat(flatten(item));
        } else {
            // 不是数组，是单个元素，直接push
            res.push(item);
        }
    }
    return res;
}