import styles from './toast.module.css'
import { useState, useEffect } from 'react'
import { toastEvents } from './toastController'

const Toast = () => {
    const [visible, setIsVisible] = useState(false)
    const [data, setData] = useState({
        user: 0,
        bell: 0,
        mail: 0
    })
    useEffect(()=>{
        const show = (info) => {
            setData(info)
            setIsVisible(true)
            setTimeout(() => setIsVisible(false), 3000)
        }
        // toastEvents 是 mitt 的实例
        // 定义自定义事件 show是自定义事件的名字
        // on 监听一个事件 如DOM0事件：onClick
        // 订阅了 show 的事件 订阅者
        toastEvents.on('show', show)
        // 组件销毁时，取消订阅
        return () => {
            toastEvents.off('show', show)
        }
    },[])
    // 等着通信的到来
    // 事件机制
    if(!visible) return null; //直接整个组件不显示
    return (
        <div className={styles.toastWrapper}>
            <div className={styles.toastItem}>👤 {data.user}</div>
            <div className={styles.toastItem}>🔔 {data.bell}</div>
            <div className={styles.toastItem}>✉️ {data.mail}</div>
            <div className={styles.toastArrow}></div>
        </div>
    )
}

export default Toast
