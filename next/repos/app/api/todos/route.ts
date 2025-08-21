import {
    NextResponse // 相当于后端res
} from 'next/server' // api server
// ts 是 js 的超集，添加了类型约束
import { type Todo } from '@/app/types/todo'


let todos : Todo[] = [
    {
        id: 1,
        text: 'todo 1',
        completed: false
    },
    {
        id: 2,
        text: 'todo 2',
        completed: true
    }
]
// todos.push({
//     id: 1,
//     text: 'todo 1',
//     completed: false
// })
// restful 一切皆资源
// 后端用来向用户暴露资源
// method + 资源 URL定义规则
export async function GET(){
    return NextResponse.json(todos)
}

export async function POST(request: Request) {
    // 获取请求体
    const data = await request.json()
    // 用了类型约束，就必须写全，写错类型或少写会报错，有代码提示
    // 核心的数据，函数的参数，返回值
    const newTodo:Todo = {
        id: + Date.now(),
        text: data.text,
        completed: false
    }
    todos.push(newTodo)
    return NextResponse.json(newTodo)
}

export async function PUT(request: Request) {
    const data = await request.json();// 请求体
    todos = todos.map(todo => 
        todo.id === data.id ? {...todo, completed: data.completed} : todo
    )
    return NextResponse.json(todos)
}

// restful 后端编程风格
export async function DELETE(request: Request) {
    const data = await request.json();
    todos = todos.filter(todo => todo.id !== data.id)
    return NextResponse.json(todos);
}