// 内置的 hook 函数
import {useState} from 'react'
import '../Todo.css'
import TodoForm from './TodoForm'
import Todos from './Todos'
function TodoList() {
    // 数据驱动的界面
    // 静态页面？
    // DOM 数组 -> map -> join('') -> innerHTML 底层API 编程
    // 缺点：低效、 面向API、 容易出错、 难维护
    // 面向业务 懂业务
    // 数据 -> 变化 -> 数据状态 -> 自动刷新页面 -> **数据****驱动**页面
    // useState 是一个函数， 传入一个初始值， 返回一个数组， 数组的第一个元素是数据变量(初始状态（值）)， 第二个元素是一个函数， 函数可以改变数据
    // 第二项函数 执行，并传入新的 todos
    // 页面会自动更新
    // 挂载点 如：document.querySelect('tbody')
    // {todos.map}
    // setTodos DOM 及动态更新
    // 响应式界面开发
    // hi 是数据状态（初始值就是useState()里的），setHi 是一个函数， 函数可以改变数据状态
    // es6 解构 
    // const hi = useState('haha')[0];
    // const setHi = useState('haha')[1];
    // const [hi,setHi] = useState('haha');
    const [title,setTitle] = useState('Todo list')
    const [todos,setTodos] = useState([
        {
            id:1,
            text:'吃饭',
            completed:false
        },
    ])
    const handleAdd = (text)=>{
        // 1. 拿到数据状态
        // 2. 改变数据状态
        // 3. 页面会自动更新
        setTodos([
            ...todos,// 原来的数组 展开运算符
            // 新的数组
            {
                id:todos.length+1,
                text,
                completed:false
            }
        ])
    }
    // setTimeout(()=>{
    //     setTodos([
    //         ...todos,
    //         {
    //             id:2,
    //             text:'睡觉',
    //             completed:false
    //         },
    //     ])
    //     // 找到DOM ，innerHTML 更新
    //     // 更新业务
    //     setTitle('Todo list 2')
    //     setHi('奥利给')
    // },3000)
    
    return (
       <div className="container">
            <h1 className="title">{title}</h1>
             {/* 负责表单 */}
            <TodoForm onAdd = {handleAdd}/>
            {/* 负责列表 */}
            <Todos todos={todos}/>
            {/* {
                // 当下这个位置
                // 数据为王 界面是被驱动的
                // 数据驱动
                // 数据绑定
                todos.map(todo=>(
                    <li>{todo.text}</li>
                ))
            } */}
       </div>
    );
}

export default TodoList;