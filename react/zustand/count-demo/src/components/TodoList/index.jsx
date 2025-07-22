import { 
    useTodosStore
 } from '../../store/todos';
const TodoList = () => {
    const { 
        todos,
        addTodo,
        removeTodo 
    } = useTodosStore();

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    )
}
export default TodoList;