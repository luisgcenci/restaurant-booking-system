import React from 'react'
import '../css/PopUp.css'

const PopUp = (props) => {

    const handlePopUp       = props.handlePopUp;
    const handleReservation = props.handleReservation;

    const handleClick       = (confirmation) =>{
        
        if (confirmation){
            handleReservation();
            return;
        }
        handlePopUp(false);
    }

    return (
        <div className = "PopUp container-fluid">
            <div className="row PopUpInner">
                <div className="col-12 text">
                    <h4>CONFIRM TABLE RESERVATION?</h4>
                </div>
                <div className="col-5 btn btn btn-danger"       onClick = {() => handleClick(true)}>
                    <h4>YES</h4>
                </div>
                <div className="col-5 offset-2 btn btn-success" onClick = {() => handleClick(false)}>
                    <h4>NO</h4>
                </div>
            </div>
        </div>
    )
}

export default PopUp;
