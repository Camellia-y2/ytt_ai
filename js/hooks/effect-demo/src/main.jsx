import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode> // 渲染一次又测试一次 会执行两遍
    <App />
  // </StrictMode>,
)
