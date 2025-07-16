import { useState } from 'react'
import './App.css'
import {
  TodoContext
} from './TodoContext';
import {
  useTodos
} from './hooks/useTodos';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const todosHook = useTodos([])

  return (
    // 管理全局App状态
    <TodoContext.Provider value={todosHook}>
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
    </TodoContext.Provider>
  )
}

export default App
