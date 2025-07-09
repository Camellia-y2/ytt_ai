function CreateCounter(num) {
    // 对外的接口
    // 对内的私有
    this.num = num; // 公共属性 public
    // 私有变量 private
    let count = 0;
    return {
        num: num, // 公共属性 public
        // 公共方法 public
        increment: () => {
            count++;// 私有变量 private
            console.log(count);
        },
        decrement: () => {
            count--;
        },
        getCount: () => {
            console.log("count 被访问了");
            return count;
        }
    }
}

// let obj = new CreateCounter(1);
// console.log(obj.num); // 0

const counter = CreateCounter(2);
console.log(counter.count);// 访问不到私有变量 undefined
// 闭包延长了变量的生命周期
// 不直接操作它
console.log(counter.num);// 2 可以访问的，闭包
counter.increment();// 1 可以访问的，闭包
// console.log(counter.increment());// 访问不到私有变量
console.log(counter.getCount());// 1  要转个弯，在闭包里面调用