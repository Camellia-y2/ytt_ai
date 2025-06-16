// 读取1.html里面的内容
// 读取完后 打印 读完了
const fs = require('fs'); // 引入js内置的文件模块
const readFilePromise = new Promise((resolve)=>{
    fs.readFile('./1.html',(err,data) =>{ // 异步任务
        console.log(data.toString()); // 把二进制的data转换为字符串
        resolve() // 异步任务完成了 调用resolve
    })
})
readFilePromise
    .then(()=>{
        // 函数
        console.log('1111');
    })
