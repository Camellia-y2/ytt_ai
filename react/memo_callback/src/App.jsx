import { 
  useState,
  useEffect,
  useCallback,
  useMemo // 缓存一个复杂计算的值
} from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)
  console.log('App render')

  const expensiveComputation = (n) => {
    console.log('expensiveComputation')
    // 复杂计算，开销高
    for (let i = 0; i < 1000000000; i++) {
      // 模拟复杂计算
      i++
    }
    return n * 2
  }
  const result = useMemo(() => {
    return expensiveComputation(count)
  },[count])

  useEffect(() => {
    console.log(count)
  },[count])
  useEffect(() => {
    console.log(num)
  },[num])
  // reRender 重新生成
  // 希望他不要重新生成 和useEffect 一样
  // callBack 回调函数 缓存 父组件重新运行，不要重新生成这个回调函数
  const handleClick = useCallback(() => {
    console.log('handleClick')
  },[num])
  return (
    <>
    {/* <div>{expensiveComputation(count)}</div>
     */}
     <div>{result}</div>
     <div>{count}</div>
     <button onClick={()=> setCount(count + 1)}>+1</button>
     <br />
     <button onClick={()=> setNum(num + 1)}>+1</button>
     <br />
     {/* <Button text="click me" /> */}
     <Button onClick={handleClick}>Click me</Button> 
     {/* <Button>Click me</Button>  */}
    </>
  )
}

export default App
