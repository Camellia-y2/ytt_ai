console.log('同步Start')
// 同步任务 .then()才是微任务
const promise1 = Promise.resolve('First Promise')
const promise2 = Promise.resolve('Second Promise')
const promise3 = new Promise(resolve => {
    console.log('Promise3') 
    resolve('Third Promise')
})
// 异步任务 宏任务
setTimeout(()=>{
    console.log('下一把再见')
    const promise4 = Promise.resolve('Fourth Promise')
    promise4.then(res => {
        console.log(res)
    })
},0)
setTimeout(()=>{
    console.log('下下把再见')
},0)
// 异步任务 微任务
promise1.then(res => {
    console.log(res)
})
promise2.then(res => {
    console.log(res)
})
promise3.then(res => {
    console.log(res)
})
console.log('同步End')