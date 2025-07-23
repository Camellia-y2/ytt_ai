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
    const handleLogin = (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        if(!username || !password){
            alert('请输入用户名和密码');
            return;
        }
        login({username, password})
        setTimeout(()=>{
            navigate('/')
        },1000) // 登录成功跳转至首页
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
