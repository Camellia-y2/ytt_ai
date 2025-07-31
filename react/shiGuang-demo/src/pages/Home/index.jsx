//首页
import { NavLink } from 'react-router-dom'
import styles from './home.module.css'
import logo from '@/assets/logo/logo.png'
import { Search, Ellipsis } from '@react-vant/icons'
import { Tabs } from 'react-vant'

const tabs = ['标签 1', '标签 2', '标签 3']
const Home = () => {
  return (
    <div>
      {/* 头部 */}
      <header className={styles.header}>
        {/* logo */}
        <div className={styles.headerLeft}>
          <img className='logo' src={logo} alt="logo" />
        </div>
        {/* 图标导航 */}
        <div className={styles.headerRight}>
          <NavLink to="/search"><Search className={styles.icon} /></NavLink>
          <Ellipsis className={styles.icon} />
        </div>
      </header>

      {/* 主体 */}
      <main className={styles.main}>
      <Tabs border type='capsule'>
        {tabs.map(item => (
          <Tabs.TabPane key={item} title={`标签${item}`}>
            胶囊标签页 {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
      </main>
    </div>
  )
}

export default Home