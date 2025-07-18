// 如何遍历数组
// 1. for循环 
// 计数循环，性能好，可读性不好，不是人脑能理解的
// for (let i = 0; i < arr.length; i++) { // 迭代器 索引
// }
// 2. while
// 3. forEach
// 4. map filter find reduce some every 。。。
// 5. for...of

const names = Array.of('Alice','Bob','Charlie')
console.log(names);
names.forEach(name=>{ // 迭代器 索引 数组
   if(name === 'Bob'){ // 终止循环
       console.log("找到Bob了")
    //    break; // 报错 不能在forEach中使用break 或 continue
        return;
   }
   console.log('Processing:'+name)
})
