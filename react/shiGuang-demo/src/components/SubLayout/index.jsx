//副页面布局
import {
    Outlet,
} from 'react-router-dom'
const SubLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}
export default SubLayout
