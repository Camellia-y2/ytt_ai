# 全家桶之Zustand 状态管理

- 现代前端开发模式
    - UI 组件开发 + 全局应用状态管理
- 轻巧，hooks化的状态管理库
    - count 响应式状态
    - 全局应用管理
        useContext + useReducer + React.createContext
    - redux/zustand 第三方库 简化开发流程

- 小项目 store没必要
- 中大型项目 router store 配上
    - react-router-dom
    - zustand
    全部都用状态管理 组件是UI组件
    组件状态 收归中央（store）统一管理