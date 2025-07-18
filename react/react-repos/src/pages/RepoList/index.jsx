import { 
    useParams,
    useNavigate,
    Link
 } from "react-router-dom"
import { 
    useEffect,
 } from "react"
 import {
    useRepos
 } from "@/hooks/useRepos"
const RepoList = () => {
    const {id} = useParams(); // 要放在主组件的最顶层
    console.log(useParams())
    const navigate = useNavigate(); // 重定向函数
    // 自定义hooks:useRepos
    const { repos, loading, error } = useRepos(id);
    console.log("//////"+repos,loading,error);
    // 嵌套函数
    useEffect(() => { // 副作用：页面渲染完了 
        if(!id.trim()) {
            navigate('/') // 重定向到主页，没有id就跳转到主页，有id就继续往下走
        }
        
    }, []) // 渲染后和组件卸载前执行一次

    if(loading) { // 加载中
        return (<>loading...</>)
    }
    if(error) { // 错误
        return (<>error:{error}</>)
    }
    return (
        <>
            <h2>Repositories for {id}</h2>
            {
                repos.map((repo) => ( // 遍历仓库列表，显示仓库名称和描述
                    <div>
                        <Link key={repo.id} to={`/users/${id}/repos/${repo.name}`}>
                            {repo.name}
                        </Link>
                    </div>
                ))
            }
        </>
    )
}
export default RepoList