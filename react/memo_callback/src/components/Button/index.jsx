import {
    useEffect,
    memo, // 阻止子组件的重新渲染
} from 'react'
const Button = ({num}) => {
// const Button = () => {
    useEffect(() => {
      console.log('Button useEffect')
    },[])
    console.log('Button render')
  return <button>{num}Click me</button>
//   return <button>Click me</button>
}
// 高阶组件
export default memo(Button)
// export default Button