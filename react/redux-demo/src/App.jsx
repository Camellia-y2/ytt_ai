import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Counter2 from './components/Counter2'

function App() {

  return (
    <>
      <div style={{ display: 'flex', gap: '50px', justifyContent: 'center', padding: '20px' }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Redux Toolkit</h2>
          <Counter />
        </div>
        <div style={{ textAlign: 'center' }}>
          <h2>Zustand</h2>
          <Counter2 />
        </div>
      </div>
    </>
  )
}

export default App
