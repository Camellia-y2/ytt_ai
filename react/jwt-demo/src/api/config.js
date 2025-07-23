import axios from 'axios'
axios.defaults.baseURL = "http://localhost:5173/api"
// 拦截器
axios.interceptors.request.use(config=>{
    console.log('////')
    let token = localStorage.getItem('token') || '';

    //  config.headers.Authorization = token;

    // config.headers.Authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMDAxIiwidXNlcm5hbWUiOiJhZG1pbiJ9LCJpYXQiOjE3NTMyMzk1NTIsImV4cCI6MTc1MzMyNTk1Mn0.56G4tYJhIq-d7oNslhyTkOsKTv5x3yXGH3sP6qIZIL8'
    
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})
axios.interceptors.response.use(res=>{
    console.log('////')
    // config.headers.Authorization = token;
    return res;
})

export default axios;