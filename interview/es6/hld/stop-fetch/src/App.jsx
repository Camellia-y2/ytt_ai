import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  // AbortController用于对一些异步任务发送信号（在异步任务中使用订阅signal），可以中断fetch请求
  let controller = new AbortController()

  useEffect(()=>{
    fetch('http://localhost:5173/api/banners',{
      // 接受信号
      signal: controller.signal
      // signal: AbortSignal.timeout(1000)
    })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
      })
  }, [])
  const stop = () => {
    controller.abort()
  }
  return (
    <>
      <button onClick={stop}>暂停</button>
    </>
  )
}

export default App
