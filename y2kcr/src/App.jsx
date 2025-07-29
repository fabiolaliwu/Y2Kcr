import { useState } from 'react'
import y2kLogo from '/images/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='mainPage'>
        <div className='title'>
          <img src={y2kLogo} className="logo" alt="Y2K Logo" />
        </div>
        <div className='body'>
        aqui posteamos las cosas que vamos a vender 
        </div>
        <div className='contact'>
        Informacion de contacto
        </div>
      </div>
  )
}

export default App
