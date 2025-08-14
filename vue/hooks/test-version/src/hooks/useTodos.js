import {
    ref,
    computed // 计算属性
} from 'vue'

export const useTodos = () => {
    let title = ref('')
    let todos = ref([
        {
            title: '学习Vue',
            done: false
        }
    ])
    function addTodo() {
        todos.value.push({
            title: title.value,
            done: false
        })
        title.value = ""
    }
    function clear() {
        // done false 留下未完成的 已完成的清除
        todos.value = todos.value.filter((v) => !v.done)
    }
    // 未完成的todos的数量 - 修改为返回数量而不是数组
    let active = computed(() => {
        return todos.value.filter((v) => !v.done).length;
    })
    
    let all = computed(() => {
        return todos.value.length;
    })
    
    let allDone = computed({
        get: function() {
            // 修复判断条件 - 检查active的长度是否为0
            return active.value === 0;
        },
        set: function(value) {
            // 修复设置逻辑 - 直接使用传入的value
            todos.value.forEach(todo => {
                todo.done = value;
            })
        }
    })
    return {
        title, 
        todos, 
        addTodo, 
        clear, 
        active, 
        all, 
        allDone 
    }
}

