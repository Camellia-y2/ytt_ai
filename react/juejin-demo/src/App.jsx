import { useState } from 'react'
import {
  Suspense,
  lazy,
} from 'react'
import {
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import './App.css'
import MainLayout from '@/components/MainLayout'

const Home = lazy(() => import('@/pages/home'))
const SearchPage = lazy(() => import('@/pages/searchPage'))
const Account = lazy(() => import('@/pages/account'))

function App() {

  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/account" element={<Account />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
