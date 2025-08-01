// 头部组件
import styles from './headerBox.module.css'
import { NavLink } from 'react-router-dom'
import logo from '@/assets/logo.png'
import { Search,WapNav } from '@react-vant/icons'
import UtilityPopup from '@/components/UtilityPopup'
import { useState, useEffect } from 'react'

const HeaderBox = () => {
    const [showUtilityPopup, setShowUtilityPopup] = useState(false) // 展示功能弹窗

    return (
        <>
            {/* 头部 */}
            <header className={`${styles.header} theme-color`}>
                {/* logo */}
                <div className={styles.headerLeft}>
                    <div className='logo-box'>
                        <img className='logo' src={logo} alt="logo" />
                    </div>
                </div>
                {/* 图标导航 */}
                <div className={styles.headerRight}>
                    <NavLink to="/search"><Search className={styles.searchIcon} /></NavLink>
                    <WapNav  className={styles.wapNavIcon} onClick={()=>{
                        if(!showUtilityPopup){
                            setShowUtilityPopup(true)
                        }else{
                            setShowUtilityPopup(false)
                        }
                    }}/>
                </div>
            </header>
            {/* 弹窗 */}
            {showUtilityPopup && (
                <UtilityPopup />
            )}
        </>
    )
}

export default HeaderBox;
