import { useTitle } from '@/hooks/useTitle'
import styles from './home.module.css'
import { useEffect, useState } from 'react'
import Header from './Header'
import TabsNav from './TabsNav'

const Home = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    useTitle('首页')
    useEffect(() => {
        const phoneHide = document.querySelector(`.${styles.phoneHide}`)
        phoneHide.addEventListener('click', (e) => {
            if(e.target.tagName === 'LI'){
                document.querySelector('.active').classList.remove('active')
                document.querySelector(`.${styles.phoneShowMeau}`).classList.add('active')
            }
        })
    }, [isExpanded])
    return (
        <div className='view-container'>
            <Header isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
            <main className='main-container'>
                <TabsNav />
            </main>
        </div>
    )
}
export default Home