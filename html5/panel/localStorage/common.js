const addItems = document.querySelector('.add-items'); //form
const itemsList = document.querySelector('.plates'); // 列表ul

function addItems(e){ // 监听form的submit事件
    e.preventDefault(); // 阻止默认行为，即表单提交后页面会刷新
    // const text = (this.querySelector('[name=item]')).value; // 获取input的值
    // localStorage.setItem(text,text); // 将input的值存入localStorage中
    // const item = document.createElement('li'); // 创建li元素
    // item.innerHTML = text; // 将input的值存入li元素中
    // itemsList.appendChild(item); // 将li元素添加到ul中

    // this.reset(); // 重置表单，即清空input的值
}

addItems.addEventListener('submit',addItems); // 监听form的submit事件