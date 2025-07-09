const TodoItem = (props) => {
    const {
        id,
        text,
        isCompleted,
    } = props.todo;
    const {onToggle} = props; // 解构
    const {onDelete} = props; // 解构
    
    return (
        <div className="todo-item"> 
            <input 
                type="checkbox" 
                checked={isCompleted} 
                onChange={onToggle}
            />
            <span className={isCompleted ? 'completed' : ''}>{text}</span>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}

export default TodoItem