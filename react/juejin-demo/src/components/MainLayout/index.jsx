import { Tabbar } from 'react-vant';
import { 
    Outlet,
    useNavigate,
    useLocation
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
    HomeO,
    Search,
    FriendsO
} from '@react-vant/icons';

const tabs = [
    {
        icon: <HomeO />,
        title: '首页',
        path: '/home'
    },
    {
        icon: <Search />,
        title: '搜索',
        path: '/search'
    },
    {
        icon: <FriendsO />,
        title: '我的',
        path: '/account'
    },
]
const MainLayout = () => {
    const [active, setActive] = useState(0)
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(()=>{
        const index = tabs.findIndex(
            tab => location.pathname.startsWith(tab.path)
        )
        setActive(index)
    },[location.pathname])

    return (
        <div>
            <Outlet />
            <Tabbar value={active} onChange={
                (key) => {
                    setActive(key)
                    navigate(tabs[key].path)
                }
            }>
                {
                    tabs.map((tab, index) => (
                        <Tabbar.Item 
                            key={index} 
                            icon={tab.icon}
                        >
                            {tab.title}
                        </Tabbar.Item>
                    ))
                }
            </Tabbar>
        </div>
    )
}

export default MainLayout