import {
    useRef
} from 'react'
import {
    useNavigate
} from 'react-router-dom'
import {
    useUserStore
} from '../../store/user'

const Login = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const {login} = useUserStore();
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();

        const username = usernameRef.current.value.trim();
        const password = passwordRef.current.value.trim();

        if(!username || !password){
            alert('请输入用户名和密码');
            return;
        }
        try {
            // 调用登录方法
            await login({ username, password });

            // 只有登录成功才会执行到这一步
            setTimeout(()=>{
                navigate('/')
            },1000) // 登录成功跳转至首页

        } catch (error) {
            // 捕获错误，提示用户
            const errorMsg = error.message || '登录失败，请检查用户名或密码';
            alert(errorMsg); 
        }
    }
    return (
        <>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username</label>&nbsp;&nbsp;
                    <input 
                        type="text" 
                        id='username' 
                        ref={usernameRef} 
                        placeholder='请输入用户名' 
                        required/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>&nbsp;&nbsp;
                    <input 
                        type="text" 
                        id='password' 
                        ref={passwordRef} 
                        placeholder='请输入密码' 
                        required/>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </>
    )
}
export default Login;
