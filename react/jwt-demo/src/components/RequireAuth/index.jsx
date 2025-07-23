import {
    useUserStore
} from '../../store/user'
import {
    useEffect
} from 'react'
import {
    useNavigate,
    useLocation
} from 'react-router-dom'
const RequireAuth = ({children}) => {
    const {isLogin} = useUserStore();
    const navigate = useNavigate(); // 用于导航
    const { pathname } = useLocation(); // 获取当前路径
    useEffect(()=>{
        if(!isLogin) {
            navigate('/login', { from: pathname})
            // 检测到未登录，会将用户重定向到登录页面（/login），
            // 并将当前路径（/pay）作为参数（from）传递给登录页面。

            /*当用户未登录时，RequireAuth 组件会将用户重定向到 /login 登录页面，并通过 URL 参数 from 传递用户尝试访问的原始路径（例如 /pay）。
                在登录页面中，登录成功后会检查这个 from 参数：
                如果存在 from 参数，则在登录成功之后使用 navigate(from) 跳转到用户原本想访问的页面。
                如果不存在 from 参数，则默认导航到主页或用户仪表盘等。 */
        }
    },[isLogin])

    return (
        <>
            {children}
            {/* 如果用户已经登录，则直接渲染受保护的内容（比如 <Pay /> 页面） */}
        </>
    )
}
export default RequireAuth;