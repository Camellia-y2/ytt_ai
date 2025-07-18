# react repos 项目开发
- **api.github.io/users/shunwuyu/repos**

- 综合`react`开发全家桶、项目级别、大型的、性能

## 路由设计
   - react-router-dom
   - `/users/:username/repos`
   - `/repos/:username`
   - `/repos/:id`
   - 路由懒加载
   - hash / history
   - （路由守卫）
   - useParams  拿到 `:username`
## 数据管理
   - App 跨层级数据管理
   - 管理 repos
   - useContext + useReducer + hooks
      - 涉及： createContext + reducer + useRepos
## react
   - 组件的粒度
## api 如何打理
   - fetch
   - axios：专业 http请求库
        - Axios 是一个基于 Promise 的 HTTP 客户端，用于浏览器和 Node.js 中进行 AJAX 请求，支持拦截请求和响应、取消请求、转换数据等特性。
        - 独立的模块，所有请求会从组件中分离到 api目录下
## 项目目录结构，项目架构
   - api ： 应用中所有的接口
   - main.jsx 
        入口文件 
        添加路由功能 spa 
        添加全局应用状态管理

   - RepoList 功能模块
      - params 解析
         - 使用 useParams 拿到动态参数对象
         - 不要放到 useEffect 中，要放到主组件的最顶层
            React 对 Hook 的调用有三条基本规则（来自官方文档）：
               1. 只能在函数组件或自定义 Hook 中调用 Hook。
               2. 不能在条件语句、循环、嵌套函数中调用 Hook。
               3. Hook 的调用顺序在每次渲染中必须保持一致。
         - 校验 id：不要相信用户的任何提交
         - id校验失败，返回首页：使用hook: useNavigate -> navigate('/') -> 放到useEffect中
            因为 navigate() 是一个**副作用操作**，它应该在组件**渲染完成之后执行**，而不是在渲染过程中执行。所以应该把它放在 useEffect 中，而不是组件的主函数体中。
   - 组件开发模式
      - UI 组件（JSX）
      - 自定义hooks useRepos... 方便
      - 状态管理 应用层级 应该归 context 来管
         - repos loading error => context value 交给useContext管
         - useReducer 提供 reducer 函数
      - 


