import styles from './imageCard.module.css'
import { useRef, useEffect } from 'react'
const ImageCard = (props) => {
    const { url, height } = props
    const imgRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry], obs) => {
            if(entry.isIntersecting) {
                const img = entry.target;
                const oImg = document.createElement('img')
                oImg.src = img.dataset.src;
                oImg.onload = () => {
                    img.src = oImg.src;
                }
                obs.unobserve(img)
            }
        })
        if(imgRef.current) observer.observe(imgRef.current)
        return () => observer.disconnect(); // 会停止观察，并释放所有资源
    }, [])
    return (
       <div className={styles.card} style={{height}}>
           <img ref={imgRef} data-src={url} className={styles.img} style={{height}}/>
       </div>
    )
}

export default ImageCard