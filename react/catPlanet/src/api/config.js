import axios from 'axios';

// 创建axios实例
const instance = axios.create({
  baseURL: '/api',
  timeout: 5000
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 可以在这里添加token等认证信息
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 只返回数据部分
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;