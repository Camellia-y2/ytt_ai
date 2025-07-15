console.log("Start");
// node 微任务
// Process 进程对象
process.nextTick(() => {
    console.log("Process next tick");
});
// 微任务
Promise.resolve().then(() => {
    console.log("Promise Resolved");
});
// 宏任务
setTimeout(() =>{
    console.log("setTimeout");
    Promise.resolve().then(() => {
        console.log("inner Promise");
    })
},0);
console.log("end");