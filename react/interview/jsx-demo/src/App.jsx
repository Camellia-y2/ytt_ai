import { 
  useState,
  createElement
} from 'react'
import './App.css'

function App() {
  const [todos,setTodos] = useState([
    {
      id: 1,
      text: '学习React', 
      completed: false
    },
    {
      id: 2, 
      text: '学习Vue', 
      completed: false
    },
    {
      id: 3, 
      text: '学习Angular', 
      completed: false
    }
  ])
  const element = <h1 className='title'>hello, world</h1>
  // 虚拟DOM
  // 虚拟DOM就是用JS对象模拟DOM节点，这样我们就可以用JS的方式来操作DOM节点
  const element2 = createElement('h1', {className: 'title', id: 'tit'}, 'hello, world2'); // 第二个参数：属性对象(className)
  return (
    <>
    <ul>
      {
        todos.map((todo) => (
          // <li key={todo.id}>{todo.text}</li>
          createElement('li', {key: todo.id}, todo.text)
        ))
      }
    </ul>
     {element}
     {element2}
    </>
  )
}

export default App
