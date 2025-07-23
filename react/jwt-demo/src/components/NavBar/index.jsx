import {
    Link,
} from 'react-router-dom'
import {
    useUserStore
} from '../../store/user'

// 由于 useUserStore 的状态变化，
// 任何订阅了这些状态的组件（如 NavBar）都会自动重新渲染，从而显示不同的导航选项。
const NavBar = () => {
    const {isLogin, user ,logout} = useUserStore();
    console.log('isLogin:'+isLogin, 'user:'+user);
    return (
        <nav style={{padding:10, borderBottom: '1px solid #ccc'}}>
            <Link to="/">Home</Link>&nbsp;&nbsp;
            <Link to="/pay">Pay</Link>&nbsp;&nbsp;
            {
                isLogin ? (
                <>
                    <span>欢迎：{user?.username || '用户'}</span>&nbsp;&nbsp;
                    <button onClick={logout}>Layout</button>
                </>
                ) : (
                    <Link to="/login">Login</Link>
                )
            }
        </nav>
    )
}
export default NavBar;