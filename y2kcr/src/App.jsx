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
          EN CONSTRUCCION, YA LLEGAREMOS PRONTO...
        </div>
        <div className='contact'>
          <div className='contactUs'>Contact Us</div>
          <div className='belowContactUs'>
            <div className='socialMedia'>
              <div className='box'>
                <div className='smLogo'>
                  <a href='https://www.instagram.com/_y2kcr/' target='_blank' rel='noopener noreferrer'>
                    <img src={insta} className='smLogos'></img>
                  </a>
                </div>
                <div className='smContact'>
                  @_y2kcr
                </div>
              </div>

              <div className='box'>
                <div className='smLogo'>
                  <a href='https://www.facebook.com/_y2kcr/' target='_blank' rel='noopener noreferrer'>
                    <img src={face} className='smLogos'></img>
                  </a>
                </div>
                <div className='smContact'>
                  @_y2kcr
                </div>
              </div>

              <div className='box'>
                <div className='smLogo'>
                  <a href='https://www.whatsapp.com/_y2kcr/' target='_blank' rel='noopener noreferrer'>
                    <img src={whats} className='smLogos'></img>
                  </a>
                </div>
                <div className='smContact'>
                  +506 8888 8888
                </div>
              </div>
            </div>
            <div className= 'us'> 
              📍 Based in San José, Costa Rica
              <div className='copyRights'>Copyright ©2025 Y2KCR</div>
            </div>
          </div>
       
        </div>
      </div>
  )
}

export default App
