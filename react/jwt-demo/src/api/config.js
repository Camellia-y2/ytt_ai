import axios from 'axios'
// 默认基础 URL。在此设置后，所有通过该 axios 实例发出的请求都会自动将 URL 拼接上这个基础路径。
// 减少重复代码，并统一管理请求地址。
axios.defaults.baseURL = "http://localhost:5173/api"
// 拦截器

 // 1. 请求拦截器：在每次发送请求前检查是否存在token，若存在，则将其添加到请求头中。
//  axios 提供的请求拦截器功能 axios.interceptors.request.use(...)
// 每次发送请求之前，都会先经过这个拦截器函数。
// 作用：自动携带 token：每次请求时，如果用户已登录（即存在 token），
// 会自动将 token 添加到请求头中。

// 访问受保护的 API（如 /pay）时，axios 会
// 自动在请求头中添加 Authorization: Bearer <token>，以便后端验证用户身份。
axios.interceptors.request.use(config=>{
    console.log('axios.interceptors.request')
    let token = localStorage.getItem('token') || '';

    //  config.headers.Authorization = token;

    // config.headers.Authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMDAxIiwidXNlcm5hbWUiOiJhZG1pbiJ9LCJpYXQiOjE3NTMyMzk1NTIsImV4cCI6MTc1MzMyNTk1Mn0.56G4tYJhIq-d7oNslhyTkOsKTv5x3yXGH3sP6qIZIL8'
   
    if(token){
        // 格式为 Bearer <token>（这是 JWT 的标准格式）
        config.headers.Authorization = `Bearer ${token}`;
    }
    // return config; 是必须的，这样 axios 才会继续发送请求。
    return config;
})
// 2. 响应拦截器：目前仅打印响应日志，未来可根据需要在此处处理响应错误等。
axios.interceptors.response.use(res=>{
    console.log('axios.interceptors.response')
    // config.headers.Authorization = token;
    return res;
})

export default axios;