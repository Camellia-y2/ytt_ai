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
const Encyclopedia = lazy(() => import('@/pages/Encyclopedia'))
const Assistant = lazy(() => import('@/pages/Assistant'))
const Profile = lazy(() => import('@/pages/Profile'))


function App() {

  return (
    <>
     <Suspense fallback={<div>loading</div>}>
     {/* 带有 tabBar 的layout */}
      <Routes>
        <Route  element={<MainLayout />}>
          <Route path='/' element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/assistant' element={<Assistant />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/encyclopedia' element={<Encyclopedia />} />
        </Route>
     
        {/* 不带有 tabBar 的layout */}
        <Route element={<SubLayout />}>
          <Route path='/search' element={<Search />} />
        </Route>
       </Routes>
     </Suspense>
    </>
  )
}

export default App