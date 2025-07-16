# reducer and context
- useReducer 的核心
    - 响应式状态**管理**
    - reducer 纯函数 状态生产器 状态改变定规矩
    - initValue 初始状态
    - dispatch 派发一个action
       {type:'', payload:''}
- useContext
    - createContext
    - Context.Provider
    - useContext
- useReducer(通信) + useContext(响应式状态管理)
    - 跨层级全局 -》 应用 (theme/login/todos/...) 状态
    - 管理

- 自定义hook价值
    - 组件（渲染） + hook（状态）

- hook + useContext 
    全局应用级别响应式状态

- hooks + useContext + useReducer
    全局应用级别响应式状态管理