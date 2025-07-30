import './body.css';
import NewIn from "./newIn.jsx";

function Body() {
    return (
        <div className='body'>
            <div className='ads'>
                <div className='emptyBlock'> </div>
                {/* remove this later */}
                <div className='construction'> EN CONSTRUCCION, YA LLEGAREMOS PRONTO...</div>
            </div>
            <NewIn />
        </div>
    )
}
export default Body;