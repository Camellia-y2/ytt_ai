import React from 'react'
import styles from './home.module.css'
import { ArrowUp, ArrowDown, Search, Bell } from '@react-vant/icons'
import { Input, Image } from 'react-vant'
import { useNavigate } from 'react-router-dom'

const Header = ({ isExpanded, setIsExpanded }) => {
  const navigate = useNavigate()
  return (
    <header className='main-header container visible'>
      <a className={`${styles.logo}`}>
        <img 
          src="//lf-web-assets.juejin.cn/obj/juejin-web/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg" 
          alt="稀土掘金" 
        />
      </a>
      <nav className={`${styles.navList} active`}>
        <ul className={styles.navList}>
          {/* 左边导航 */}
          <li className={styles.mainNavList}>
            <div className={styles.phoneShowMeau}>
              <p>首页</p> &nbsp;
              {
                !isExpanded ? (
                  <ArrowUp onClick={() => {
                    setIsExpanded(true)
                    document.querySelector(`.${styles.phoneHide}`).classList.remove('hidden')
                  }}/>
                ) : (
                  <ArrowDown onClick={() => {
                    setIsExpanded(false)
                    document.querySelector(`.${styles.phoneHide}`).classList.add('hidden')
                  }}/>
                )
              }
            </div>
            {/* 下拉菜单 */}
            <ul className={`${styles.phoneHide} hidden`}>
              <li className={`${styles.navItem} active`}><a href="/">首页</a></li>
              <li className={styles.navItem}><a href="https://aicoding.juejin.cn/">AI Coding</a></li>
              <li className={styles.navItem}><a href="/search">搜索页</a></li>
              <li className={styles.navItem}><a href="/account">我的</a></li>
            </ul>
          </li>
          {/* 右边导航：搜索、通知、头像 */}
          <li>
            <ul className={styles.rightSideNav}>
              <li className={`${styles.searchAdd} ${styles.navItem}`}>
                <Input
                  placeholder="搜索"
                  type="text"
                  suffix={<Search className={styles.searchIcon} />}
                />
              </li>
              <li className={styles.navItem}><Bell className={styles.notification} /></li>
              <li className={`${styles.navImg} ${styles.navItem}`} onClick={() => navigate('/account')} style={{cursor:'pointer'}}>
                <Image 
                  fit="cover"
                  src="https://pic.rmb.bdstatic.com/bjh/down/d3lLqzyu-9K4-8wyqjPx9wdb8ddee34ee9369fa2a3bdd66ef6cad5.jpg?for=bg" 
                  round
                />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header 