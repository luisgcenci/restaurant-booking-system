import React    from 'react'
import moment   from 'moment'
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
                    <div className="col-12 text confirmation-info">
                        FROM: <span>{moment(props.from).format('MMMM Do YYYY, h:mm:ss a')}</span>
                    </div>
                    <div className="col-12 confirmation-info">
                        TO: <span>{moment(props.to).format('MMMM Do YYYY, h:mm:ss a')}</span>
                    </div>
                    <div className="col-12 confirmation-info">
                        FIRST NAME : <span>{props.first_name}</span>
                    </div>
                    <div className="col-12 confirmation-info">
                        LAST NAME : <span>{props.last_name}</span>
                    </div>

                <div className="col-5 btn btn-success"       onClick = {() => handleClick(true)}>
                    <h4>YES</h4>
                </div>
                <div className="col-5 offset-2 btn btn-danger " onClick = {() => handleClick(false)}>
                    <h4>NO</h4>
                </div>
            </div>
        </div>
    )
}

export default PopUp;
