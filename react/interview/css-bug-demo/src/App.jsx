import { useState } from 'react'
import './App.css'
import AnotherButton from './components/AnotherButton'
import Button from './components/Button'

// 与import有关，谁在上面就先加载

function App() {

  return (
    <>
      <Button/>
      <AnotherButton/>
    </>
  )
}

export default App
