import { useState } from "react";
function TodoForm(props){
    const onAdd = props.onAdd;// 传函数
    const [text,setText] = useState('打豆豆');
    const handleSubmit = e => {
        // 阻止默认提交行为， 不刷新页面
        e.preventDefault();
        onAdd(text);
        // console.log(e);
        // console.log(e.target.value);
        // 修改todos? 因为是它的父组件所以改不了，只能打报告
    }
    const handleChange = e => {
        setText(e.target.value);
    }
    return (
        <form action={"http://www.baidu.com"} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="请输入待办事项"
                value={text}
                onChange={handleChange}
            />
            <button type="submit">添加</button>
        </form>
    )
}
export default TodoForm;