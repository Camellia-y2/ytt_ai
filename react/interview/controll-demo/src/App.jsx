import { 
  useState,
  useRef
} from 'react'
import './App.css'

// 受控组件
function ControlledInput({onSubmit}) {
  const [value, setValue] = useState('') // 响应式状态
  const [error, setError] = useState('') // 响应式状态
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with value:', value) // 输出输入框的值
    onSubmit(value)
  }
  const handleChange = (e) => {
    setValue(e.target.value) // 当输入框的值改变时更新响应式状态
    // 频繁触发 实时判断表单是否合格
    if (e.target.value.length < 6) {
      setError('输入的内容必须大于等于6个字符')
    } else {
      setError('')
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="controlled-input">受控组件</label>
      <input
        type="text"
        value={value} // 绑定输入框的值到响应式状态
        onChange={handleChange} // 当输入框的值改变时更新响应式状态
        required
      />
      {error && <p>{error}</p>}
      <button type="submit">提交</button>
    </form>
    
  )
}

// 非受控组件
function UncontrolledInput({onSubmit}) {
  const inputRef = useRef(null) // 创建一个引用
  const handleSubmit = (e) => {
    e.preventDefault()
    const value = inputRef.current.value // 获取输入框的值
    console.log(value,'???')
    onSubmit(value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="uncontrolled-input">非受控组件</label>
      <input
        type="text"
        id='uncontrolled-input'
        ref={inputRef} // 绑定输入框的引用
      />
      <button type="submit">提交</button>
    </form>
  )
}

function App() {
  const handleSubmit = (value) => {
    console.log('/////:', value) // 输出输入框的值
  }
  return (
    <>
      <ControlledInput onSubmit={handleSubmit}/>
      <UncontrolledInput onSubmit={handleSubmit}/>
    </>
  )
}

export default App
