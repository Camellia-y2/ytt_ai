import { 
  useState,
  useReducer
} from 'react'
import './App.css'

// 伪代码
// function App() {

//   return (
//     <>
//       <LoginContext.Provider>
//         <ThemeContext.Provider>
//           <TodosContext.Provider>
//             <Layout>
//                 <Header />
//                 <Main />
//               <Footer />
//             </Layout>
//           </TodosContext.Provider>
//         </ThemeContext.Provider>
//       </LoginContext.Provider>
//     </>
//   )
// }

// 管理好多
const initialState = {
  count: 0,
  // isLogin: false,
  // theme: 'light'
}
// reducer纯函数 返回可靠的状态
// 这个函数是状态生产器
// 管理 分部门
// case 状态修改的规定
const reducer = (state,action) => {
  // increment decrement
  // {type: 'increment'}
  switch(action.type) {
    case 'increment':
      // 返回新状态
      return {
        count: state.count + 1
      }
    case 'decrement':
      return {
        count: state.count - 1
      }
    case 'incrementByNum':
      return {
        count: state.count + parseInt(action.payload)
      }
    default:
      return state // 把之前的状态返回
  }
}

function App() {
  // 初始值 initialValue
  // 当前的状态值 旧状态 新状态
  // 界面由当前状态来驱动
  // 修改状态的方法
  // 响应式
  // 管理 useState有的它都有，高级点
  const [count, setCount] = useState(0)
  // 大型项目
  // dispatch 派发  是个函数  调用这个函数 就会触发reducer  执行reducer  产生新的状态
  // dispatch 接受固定的参数  这个参数是一个对象  这个对象有一个type属性  这个属性的值是一个字符串  这个字符串的值是一个状态修改的规定
  const [state, dispatch] = useReducer(reducer, initialState) // state 当前状态 dispatch 修改状态的方法 reducer 状态生产器
  return (
    <>
      <p>Count:{state.count}</p>
      <button onClick={()=>dispatch({type:'increment'})}>+</button>
      <button onClick={()=>dispatch({type:'decrement'})}>-</button>
      <input type="text" value={count} onChange={(e)=> setCount(e.target.value)} />
      <button onClick={()=>dispatch({type:'incrementByNum',payload:count})}>
        incrementByNum
      </button>
    </>
  )
}
export default App
