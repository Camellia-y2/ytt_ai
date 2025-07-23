import { 
  useState,
  useEffect,
  lazy,
  Suspense
 } from 'react'
// import {
//   getUser
// } from './api/user'
import './App.css'
import{
  Routes,
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar'

const Home = lazy(()=>import('./views/Home'))
const Login = lazy(()=>import('./views/Login'))
const Pay = lazy(()=>import('./views/Pay'))
const RequireAuth = lazy(()=>import('./components/RequireAuth'))

function App() {

  useEffect(()=>{
    
  },[])
  return (
    <>
    <NavBar />
    <Suspense fallback={<div>loading</div>}>
    <Routes>
      {/* 当用户访问 / 时，会渲染 Home 组件 */}
      <Route path='/' element={<Home />} /> 
      <Route path='/login' element={<Login />} />
      <Route path='/pay' element={
        // 这是一个自定义的高阶组件，用于保护需要登录才能访问的路由（如 /pay）。
        // 如果用户未登录，会被重定向到登录页面。
        <RequireAuth>
          <Pay />
        </RequireAuth>
      } />
    </Routes>
    </Suspense>
    </>
  )
}

export default App
