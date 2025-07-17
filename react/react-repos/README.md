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
   - 

