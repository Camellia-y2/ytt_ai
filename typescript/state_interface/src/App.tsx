import './App.css'
import { useState } from 'react';
// import NameEditComponent from './components/NameEditComponent';
function App() {
  //js代码
  // const [name, setName] = useState("initialName");
  //typeScript 代码
  const [name, setName] = useState<string>("initialName");
  //单项数据流
  const setUsernameState = (e:React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value); 
  }
  return (
    <>
      {/* <NameEditComponent useName={name} onChange={setUsernameState} /> */}
    </>
  )
}

export default App
