import jwt from 'jsonwebtoken';

// 安全性 编码的时候加密
// 解码的时候用于解密
// 加盐
const secret = '!&124coddefgg';

// login 模块 mock
export default [
    { // 登录
        url: '/api/login', // 路径
        method: 'post', // 请求方式
        timeout: 2000, // 请求耗时
        response: (req, res) => { // 响应数据
            const { username, password } = req.body // 解构赋值 拿到数据
            if(username !== "admin" || password !== "123456"){
                return {
                    code: 1,
                    msg: "用户名或密码错误"
                }
            }
            // 生成token 颁发令牌
            // json用户数据
            const token = jwt.sign({
                user: {
                    id: "001",
                    username: "admin",
                }
            }, secret, {
                expiresIn: 86400 // 过期时间
            })
            console.log(token,'-----');
            return {
                token,
                data: {
                    id: "001",
                    username: "admin"
                }
            }
        }
    } ,
    {
        url: '/api/user',
        method: 'get',
        response: (req, res) => {
            // 用户端 token headers 
            const token = req.headers["authorization"].split(' ')[1];
            console.log(token)
            try {
                const decode = jwt.decode(token,secret)
                console.log(decode)
                return {
                    code: 0,
                    data: decode.user
                }
            } catch(error) {
                return {
                    code: 1,
                    msg: "Invalid token"
                }
            }
        }
    }
]