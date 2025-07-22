// todoList 的store
// 全局状态模块化
import {
    create
} from 'zustand';

export const useTodosStore = create((set) => ({
    todos: [
        {
            id: 1,
            text: '学习React',
            completed: false, // 完成状态
        }
    ], // 初始状态
    addTodo: (text) => {
        set((state) => ({
            todos: [
                ...state.todos,
                {
                    id: state.todos.length + 1,
                    text, // es6 语法 相当于 text: text 可省
                    completed: false,
                }
            ] // 添加新的todo
        }));
    }, 
    toggleTodo: (id) => { // 切换完成状态
        set((state) => ({
            todos: state.todos.map((todo) => { // 遍历数组 找到id 切换状态
                if (todo.id === id) { // 找到id
                    return { // 返回新的对象 改变状态
                        ...todo, // 保留原来的属性
                        completed: !todo.completed, // 改变状态
                    }
                } else { // 不是id 直接返回原来的对象
                    return todo; // 不改变状态
                }
            })
        }))
    },
    deleteTodo: (id) => { // 删除todo
        set((state) => ({ // 过滤掉id 不等于的对象 相当于删除了id 等于的对象
            todos: state.todos.filter((todo) => todo.id !== id) // 过滤掉id 等于的对象 相当于删除了id 等于的对象
        }))
    }

}))