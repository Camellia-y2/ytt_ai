import { 
  useEffect,
  useRef,
  forwardRef
 } from 'react'
import './App.css'

function Guang (props, ref){
  // const {ref} = props;
  console.log(props,ref);
  return (
    <div>
      <input type="text" ref={ref}/>
    </div>
  )
}

// 1. 将一个要传递的组件作为参数传给forwardRef,返回一个新的组件，拥有ref向下传递的能力
// 高阶组件
const WrapperGuang = forwardRef(Guang); // ref要传递的组件作为参数传递给它

function App() {
  // 父组件 持有ref
  const ref = useRef(null); // 默认的useRef不传递，考虑安全
  console.log(ref.current); // null
  useEffect(() => {
    ref.current?.focus();
  }, [])
  return (
    <div className='App'>
     {/* <input ref={ref} /> */}
     {/* <Guang ref={ref}/> */}

      {/* 2. 父组件通过ref传递给子组件 */}
     <WrapperGuang title="hello" ref={ref}/>
    </div>
  )
}

export default App
