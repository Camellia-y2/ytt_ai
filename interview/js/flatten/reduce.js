// reduce  把数组[] => 1项
// 多维数组 =》 1项一维数组
// reduce 方法把数组合并成一个值。
const flatten = arr => {
    return arr.reduce((pre, cur)=> {
        return pre.concat(Array.isArray(cur)?flatten(cur):cur);
    }, [])
}
const arr=[1,2,3,[4,5]]
console.log(arr)
console.log(flatten(arr));