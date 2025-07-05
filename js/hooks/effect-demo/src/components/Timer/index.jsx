import { 
    useState ,
    useEffect
} from "react"

const Timer = () => {
    const [time, setTime] = useState(0)
    console.log('Timer组件开始执行')
    console.log('JSX编译')
    useEffect(()=>{
        console.log('组件渲染完成')
        const interval = setInterval(() => {
            setTime(preTime => preTime + 1)
        }, 1000);
        return ()=>{
            console.log('组件卸载了')
            clearInterval(interval)//清除定时器，防止内存泄露
        }
    },[]);
    return (
        <div>已经运行{time}秒</div>
    )
}

export default Timer