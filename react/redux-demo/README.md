# Redux 全局状态管理库
- pnpm install react-redux
- Redux Toolkit：简化 Redux 使用，内置 Immer 处理不可变更新
    - createSlice：一次性定义 reducer 和 action creators
    - configureStore：配置 Redux store
    - React-Redux Hooks：useSelector 和 useDispatch
- 计时器组件
- 步骤：
    - Counter 组件：使用 useSelector 获取状态，useDispatch 派发动作
    - Store 配置：使用 Redux Toolkit 的 createSlice 和 configureStore
    - Provider 集成：在应用根部 main.jsx 提供 Redux store

 