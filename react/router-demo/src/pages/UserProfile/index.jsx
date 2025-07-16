import {
    useEffect
} from 'react'
import {
    useParams
} from 'react-router-dom'
const UserProfile = () => {
    const {id} = useParams() // 动态路由 同步的，不用放到useEffect里面
    useEffect(() => {
    //    const id = 
    
    console.log(window.location) // ？id=1234567890
    }, [])
    return (
        <>
            UserProfile
            {id}
        </>
    )
}
export default UserProfile;