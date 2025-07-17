import { 
  useState,
  lazy, // 懒加载
  Suspense,
 } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navigation from './components/Navigation' // 通用组件
import ProtectRoute from './components/ProtectRoute' // 保护路由组件
import Pay from './pages/Pay' // 支付页面
// import Home from './pages/Home'
// import About from './pages/About'
// 当项目的页面很多，就不好，需要懒加载

// 懒加载
// 返回一个新组件，这个组件会在需要的时候才会加载
// 动态加载
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Login = lazy(() => import('./pages/Login'))
const NotFound = lazy(() => import('./pages/NotFound'))
function App() {

  return (
    <>
      <Router>
        <Navigation/>
        <Suspense fallback={<div>加载中...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            {/* 鉴权 */}
            <Route path='/pay' element={
              <ProtectRoute> {/*鉴权组件: 真正显示的是Pay组件*/}
                <Pay />
                {/* <div>123</div>
                <div>456</div> */}
              </ProtectRoute>
            }/>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
