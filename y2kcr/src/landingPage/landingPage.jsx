
import Contact from './components/contactUs.jsx'
import './landingPage.css'
import Body from './components/body/body.jsx'
import Title from './components/title.jsx'


function Landing() {
  return (
      <div className='mainPage'>
        <Title/>
        <Body/>
        <Contact/>
      </div>
  )
}

export default Landing
