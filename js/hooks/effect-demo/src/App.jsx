import { 
  useState ,
  useEffect,
  use
} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)
  const [repos, setRepos] = useState([])
  // console.log('组件函数开始执行')
  // useEffect(() => {
  //   console.log('组件渲染完了')
  //  });
  //  // 生命周期的更新
  //  useEffect(() => {
  //   console.log('hhhh')
  //  },[count]);// 只有count发生改变才会执行
  //  useEffect(() => {
  //   console.log('123')
  //  },[num]);// 只有count发生改变才会执行
  //  useEffect(() => {
  //   console.log('678')
  //  },[count,num]);// 只有count发生改变才会执行

   useEffect(() => {
    // api接口数据是动态的
    console.log('只在组件挂载时运行一次！！！')
    const fetchRepos = async () => {
      const response = await fetch("https://api.github.com/users/shunwuyu/repos")
      const data = await response.json()
      console.log(data)
      setRepos(data)
    }
    fetchRepos();
   },[]);

   // 组件的模版编译
   // 挂载到#root节点上
  //  console.log('组件的模版编译')
  return (
    <>
     {count}
     <button onClick={()=>{
      setCount(count + 1)
     }}>点我</button>
    <br/>
    {num}
    <button onClick={()=>{
      setNum(num + 1)
     }}>点我</button>

    <ul id="repos">
      {
        repos.map(repo =><li key={repo.id}>{repo.full_name}</li>  
        )
      }
    </ul>

    </>
  )
}

export default App
