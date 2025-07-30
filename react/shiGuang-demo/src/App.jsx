import './App.css'
import {
  Suspense,
  lazy,
} from 'react'
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import MainLayout from '@/components/MainLayout'
import SubLayout from '@/components/SubLayout'

const Home = lazy(() => import('@/pages/Home'))
const Search = lazy(() => import('@/pages/Search'))
const Detail = lazy(() => import('@/pages/Detail'))
const Chatbot = lazy(() => import('@/pages/Chatbot'))
const Account = lazy(() => import('@/pages/Account'))


function App() {

  return (
    <>
     <Suspense fallback={<div>loading</div>}>
     {/* 带有 tabBar 的layout */}
      <Routes>
        <Route  element={<MainLayout />}>
          <Route path='/' element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/chatbot' element={<Chatbot />} />
          <Route path='/account' element={<Account />} />
        </Route>
     
        {/* 不带 tabBar 的layout */}
        <Route element={<SubLayout />}>
          <Route path='/search' element={<Search />} />
          <Route path='/detail' element={<Detail />} />
        </Route>
       </Routes>
     </Suspense>
    </>
  )
}

export default App
