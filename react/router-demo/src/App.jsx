import {
  BrowserRouter as Router, // 前端路由
  Routes, // 路由设置容器
  Route // 单条路由
} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home' // 首页
import About from './pages/About' // 首页
import UserProfile from './pages/UserProfile' // 个人中心
import Products from './pages/Products' // 商品列表
import ProductDetails from './pages/Products/ProductDetails' // 商品详情
import NewProduct from './pages/Products/NewProduct' // 新增商品
 
function App() {

  return (
    <>
      {/* 前端路由接管一切，配置 */}
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          {/* 动态路由 */}
          <Route path='/user/:id' element={<UserProfile />}/>
          、
          {/* 嵌套路由 */}
          <Route path='/products' element={<Products />}>
            {/* 二级路由: 页面中的一块页面 如Tab栏切换 */}
            <Route path=':productId' element={<ProductDetails />} />
            <Route path='new' element={<NewProduct />} />
          </Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
