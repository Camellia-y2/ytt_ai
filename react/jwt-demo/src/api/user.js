import axios from './config'

// getUser: 获取当前用户的信息。
export const getUser = () => {
    return axios.get('/user')
}
// doLogin: 执行登录操作，向服务器提交用户名和密码，并返回登录结果
export const doLogin = (data) => {
    return axios.post('/login',data)
}
