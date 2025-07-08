import TodoItem from "./TodoItem"

const TodoList = (props) => {
    const {
        todos,
        onToggle,
        onDelete
    } = props;
    return (
        <ul className="todo-list">
            {/* TodoList */}
            {
                todos.length > 0 ? (
                    todos.map((todo) => <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        onToggle={() => onToggle(todo.id)}  // id也不是他管的，还要通知父组件
                        onDelete={() => onDelete(todo.id)}
                    />)
                ) : (
                    <p>暂无待办事项</p>
                )
            }
            {/* <TodoItem /> */}
        </ul>
    )
}

export default TodoList