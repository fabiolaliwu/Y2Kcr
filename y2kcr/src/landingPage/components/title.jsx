import './title.css';
import y2kLogo from '/images/logo.png'

function Title() {
    return(
        <div className='title'>
          <img src={y2kLogo} className="logo" alt="Y2K Logo" />
        </div>
    )
}
export default Title;