import axios from 'axios';
import type {
    AxiosRequestConfig, AxiosResponse
} from 'axios';

const instance = axios.create({
    // 前端在5173端口，后端在3000端口
    baseURL: "http://localhost:3000",
    timeout: 10*1000,
    withCredentials: true, // 是否能携带跨域头信息
})

instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
)
// 泛型 类型作为参数传递
// 约束下api输出的类型
export const request = <T>(config: AxiosRequestConfig):Promise<AxiosResponse<T>> => {
    return instance(config);
}

export default instance;