import {
    useState // useState私有状态  props是外部传进来的
} from 'react'
import {useTodoContext} from '../hooks/useTodoContext'
const AddTodo = () => {
    const [text, setText] = useState('')
    const {addTodo} = useTodoContext() // 跨层级
    const handleSubmit = (e) => {
        e.preventDefault() // 阻止默认行为 刷新页面
        if(text.trim()){
            addTodo(text.trim()) // 调用
            setText('') // 清空
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={text} 
                onChange={e=>setText(e.target.value)}/>
            <button type='submit'>Add</button>
        </form>
    )
}
export default AddTodo