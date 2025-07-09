import {
    useState
} from 'react'
const TodoForm = ({onAddTodo}) => {
    // JSX 一定得有唯一的最外层元素 用div包裹  
    // react用树状结构来编译解析JSX                             
    // props和state 都是数据对象，state是内部私有的状态，props是外部的状态，参数数据
    // 单项数据流
    const [text,setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        let result = text.trim(); // 不要重复调用，会消耗性能
        if(!result) return;
        onAddTodo(result);
        setText(''); // 清空输入框 数据状态和界面状态要一致 要敏感
    }
    return (
        <>
            <h1 className='header'>TodoList</h1>
            <form className='todo-input' onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={text} // 数据绑定 若不进行绑定，输入框就是非受控组件，其值由 DOM 管理。
                    onChange={e => setText(e.target.value)} // input更新 useState 也更新
                    placeholder='请输入内容'
                    required
                />
                <button type='submit'>提交</button>
            </form>
        </>
    )
}

export default TodoForm