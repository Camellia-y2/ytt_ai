import {
    useReducer
} from 'react';
import todoReducer from '../reducers/todoReducer';
// es6 新特性 参数默认值
// {todos:todos } key 与 value 同名可以省略 value
// '' 模版字符串
// 解构赋值 []=[] {}={}
// 展开运算符（rest运算符） 剩余参数  ...rest
export function useTodos(initial = []) {
    const [todos,dispatch] = useReducer(todoReducer,initial);

    const addTodo = text => dispatch({type:'ADD_TODO',text});
    const toggleTodo = id => dispatch({type:'TOGGLE_TODO',id});
    const removeTodo = id => dispatch({type:'REMOVE_TODO',id});

    // 箭头函数：
    // 1. 省略了 function 关键字
    // 2. 如果函数体只有一条语句，并且这条语句是一个返回值，则可以省略花括号 {} 和 return 关键字，此时该返回值会自动被返回。
    //  当返回的是对象，要加一个括号包住，防止{}被解析为代码块
    // 3. 省略了参数括号，只有一个参数时，可以省略参数括号；没有参数时，不可以省略参数括号
    return {
        todos,
        addTodo,
        toggleTodo,
        removeTodo,
    }
}