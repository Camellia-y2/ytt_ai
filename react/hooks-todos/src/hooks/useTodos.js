import { 
    useState,
    useEffect
} from "react";
export const useTodos = () => {
    const [todos,setTodos] = useState(
        // localStorage.getItem()是同步的，如果数据过多，会造成阻塞，导致页面卡顿，因为这里数据少，就不优化了
        JSON.parse(localStorage.getItem('todos')) 
    )
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
   useEffect(()=>{
    // console.log('todos change')
    // 只接受字符串，如果不是，就会自动转换.toString()
    localStorage.setItem('todos',JSON.stringify(todos))
},[todos])
   return {
      todos, 
      setTodos,
      addTodo,
      onToggle,
      onDelete
   }
};

