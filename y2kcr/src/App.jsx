import { useState } from 'react'
import y2kLogo from '/images/logo.png'
import insta from '/images/instagram.jpg'
import face from '/images/facebook.jpg'
import whats from '/images/whatsapp.jpg'
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
          <div className='contactUs'>Contact Us</div>
          <div className='belowContactUs'>
            <div className='socialMedia'>
              <div className='box'>
                <img src={insta} className='smLogos'></img>
                @_y2kcr
              </div>
              <div className='box'>
                <img src={face} className='smLogos'></img>
                @_y2kcr
              </div>
              <div className='box'>
                <img src={whats} className='smLogos'></img>
                +506 8888 8888
              </div>
            </div>
            <div className= 'idk'> </div>
          </div>
       
        </div>
      </div>
  )
}

export default App
