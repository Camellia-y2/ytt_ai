import { 
  useState,
  useEffect,
  useLayoutEffect,
  useRef // 获取dom元素 
} from 'react'
import './App.css'

// function App() {
//   const boxRef = useRef() // current 属性为 null  是响应式对象
//   console.log(boxRef.current,boxRef) // null

//   useEffect(()=>{
//     console.log('useEffect height',boxRef.current.offsetHeight)
//   },[])
//   useLayoutEffect(()=>{
//     console.log('useLayoutEffect height',boxRef.current.offsetHeight)
//   },[])
//   return (
//     <>
//      <div ref={boxRef} style={{height:100}}></div>
//     </>
//   )
// }

// function App() {
//   const [content,setContent] = useState('“Smelly cat, smelly cat, what are they feeding you?')
//   const ref = useRef()
//   // useEffect(()=>{
//   //   // 阻塞渲染，同步的感觉
//   //   setContent('曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候才后悔莫及，人世间最痛苦的事莫过于此。你的酒馆对我打了烊，刀砍东风，欠饮滑喉。如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。如果非要在这份爱上加上一个期限，我希望是——一万年')
//   //   ref.current.style.height = '200px';
//   // },[])

//   useLayoutEffect(()=>{
//     // 阻塞渲染，同步的感觉
//     setContent('曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候才后悔莫及，人世间最痛苦的事莫过于此。你的酒馆对我打了烊，刀砍东风，欠饮滑喉。如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。如果非要在这份爱上加上一个期限，我希望是——一万年')
//     ref.current.style.height = '200px';
//   },[])
//   return (
//     <>
//       <div ref={ref} style={{height:'50px',background:'lightblue'}}>{content}</div>
//     </>
//   )
// }

// 弹窗
function Modal() {
  const ref = useRef() //响应式对象
  useLayoutEffect(()=>{
    const height = ref.current.offsetHeight
    ref.current.style.marginTop = `${(window.innerHeight - height)/2}px` // 在页面渲染前计算，防止页面抖动
    // console.log('height',height)
    // console.log('window.innerHeight',window.innerHeight)
  },[])

  return <div ref={ref} style={{backgroundColor:'red', position:'absolute',width:'200px'}}>我是弹窗</div>
}


function App() {
  return (
    <>
      <Modal />
    </>
  )
}


export default App
