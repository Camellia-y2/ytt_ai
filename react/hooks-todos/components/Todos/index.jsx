import {
    // 响应式状态hooks
    useState // react 函数式编程 好用的以use 开头
} from 'react'
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

const Todos = () => {
    // 数据流管理
    // 父组件持有管理数据 props 传递数据 子组件通过props 自定义函数
    // 通知父组件
    const [todos,setTodos] = useState([
        {
            id:1,
            text:'打豆豆',
            isCompleted:false
        },
        {
            id:2,
            text:'算法比赛',
            isCompleted:false
        }
    ])
    // 新增todo
    const addTodo = (text) => {
        // setTodo 
        // 数据状态是对象的时候，一定要把原来的删掉（重新从头更新，用[]包着），因为是对象，引用的地址会发生改变
        setTodos([
            ...todos,
            {
                id:Date.now(), //用时间戳，唯一
                text,
                isCompleted:false
            }
        ])
    }

    const onToggle = (id) => {
        // 遍历数组，找到id，修改isCompleted
        // 响应式状态是不可变的，不能直接修改，要用setTodos
        // map返回新数组  
        setTodos(todos.map(
            todo => todo.id === id 
            ? { ...todo, isCompleted: !todo.isCompleted } // 新对象 当找到对应的id，前面的属性可以不变用...todo，后面的属性可以改变，最后一项要变化
            : todo
        ))
    }

    const onDelete = (id) => {
        // 遍历数组，找到id，修改isCompleted
        // 响应式状态是不可变的，不能直接修改，要用setTodos
        // filter返回新数组  
        setTodos(todos.filter(
            todo => todo.id !== id  // return true;
        ))
    }
    return (
        <div className='app'>
            Todos
            {/* 自定义事件 */}
            <TodoForm onAddTodo={addTodo} />
            <TodoList 
                todos={todos} 
                onToggle={onToggle} 
                onDelete={onDelete}
            />
        </div>
    )
}

export default Todos