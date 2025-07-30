import "./newIn.css";


function Filter() {
    return (
        <div className='bar'> 
            <div className="imageHolder"> 
                <img src="/images/sample.jpeg" alt="New In" className="newInImage" />
            </div>
            <div className="imageHolder"> 
                <img src="/images/sample2.jpeg" alt="New In" className="newInImage" />
            </div>
            <div className="imageHolder"> 
                <img src="/images/sample3.jpeg" alt="New In" className="newInImage" />
            </div>
        </div>
    )
}
export default Filter;