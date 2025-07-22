// zustand react 状态管理架构
import {
    create // 创建一个store仓库 存状态的地方
} from 'zustand';

// 创建了一个 count store
// 以use开头 hook
export const useCounterStore = create((set)=>({
    //  对象
    // 状态
    // 修改状态的方法
    count: 0,
    // 原来写在reducer函数 规定状态怎么变
    // state当前stroe的状态对象
    increment: ()=>{
        set((state) => ({count: state.count + 1}))
    },
    decrement: ()=>{
        set((state) => ({count: state.count - 1}))
    }
}))