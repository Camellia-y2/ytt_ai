import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState(0)
  const [title,setTitle]=useState("")
  const [colors,setColors]=useState("")
  console.log(count,'count')
  const handleClick=()=>{
    // 异步 不是同步
    // react 性能优化 会合并多次更新 统一处理
    // 重绘重排
    // 数据绑定，界面更新
    // JS 引擎 V8，渲染引擎 Blink，从一个引擎到另一个引擎，像高速过路费，开销大
    // 多了就会涉及重绘重排
    // 三次执行是异步，触发是同步
    // 用的是闭包里的值，拿不到最新值
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setTitle("")
    // setColors("")

    // setState 函数式更新语法
    // 保证每个更新都基于上一个最新的更新
    // 界面的更新合并为一次的
    setCount(pre=>pre+1);//解决执行三次只加了1的问题
    setCount(pre=>pre+1);
    setCount(pre=>pre+1);
  }
  return (
    <>
     <p>当前计数：{count}</p>
     <button onClick={handleClick}>+3</button>
    </>
  )
}

export default App
