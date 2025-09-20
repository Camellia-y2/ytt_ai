import { configureStore, createSlice } from '@reduxjs/toolkit';

// 创建计数器切片（包含状态和修改方法）
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      // 直接"修改"状态（Immer库会处理为不可变更新）
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// 导出action创建函数
export const { increment, decrement, reset } = counterSlice.actions;

// 配置全局存储
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});