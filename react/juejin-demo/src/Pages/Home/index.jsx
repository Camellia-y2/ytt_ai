import { useTitle } from '@/hooks/useTitle'
const Home = () => {
    useTitle('首页')
    return (
        <div>
            <h1>Home</h1>
            <p>这是首页</p>
        </div>
    )
}
export default Home