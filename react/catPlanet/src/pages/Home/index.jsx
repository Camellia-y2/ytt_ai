// 首页
import { NavLink } from 'react-router-dom'
import styles from './home.module.css'
import HeaderBox from '@/components/HeaderBox'
import useTitle from '@/hooks/useTitle'

const Home = () => {
  useTitle('首页')
  return (
    <div>
      {/* 头部 */}
      <HeaderBox />

      {/* 主体 */}
      <main className={styles.main}>
      
      </main>
    </div>
  )
}

export default Home