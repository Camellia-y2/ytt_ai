// 首页
import { NavLink } from 'react-router-dom'
import styles from './home.module.css'
import logo from '@/assets/logo.png'
import { Search, Ellipsis } from '@react-vant/icons'

const Home = () => {
  return (
    <div>
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
          <Ellipsis className={styles.ellipsisIcon} />
        </div>
      </header>

      {/* 主体 */}
      <main className={styles.main}>
      
      </main>
    </div>
  )
}

export default Home