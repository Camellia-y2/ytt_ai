// login 模块 mock
export default [
    { // 登录
        url: '/api/login', // 路径
        method: 'post', // 请求方式
        timeout: 2000, // 请求耗时
        response: (req, res) => { // 响应数据
            const { username, password } = req.body // 解构赋值 拿到数据
            return {
                username,
                password
            }
        }
    } 
]