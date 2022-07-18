import React    from 'react'
import moment   from 'moment'
import styles from './css/PopUp.module.css'

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
        <div className={styles.PopUp}>
            <div>
                <div>
                    <h4>CONFIRM TABLE RESERVATION?</h4>
                </div>
                    <div className={styles.ConfirmationInfo}>
                        FROM: <span>{moment(props.from).format('MMMM Do YYYY, h:mm:ss a')}</span>
                    </div>
                    <div className={styles.ConfirmationInfo}>
                        TO: <span>{moment(props.to).format('MMMM Do YYYY, h:mm:ss a')}</span>
                    </div>
                    <div className={styles.ConfirmationInfo}>
                        FIRST NAME : <span>{props.first_name}</span>
                    </div>
                    <div className={styles.ConfirmationInfo}>
                        LAST NAME : <span>{props.last_name}</span>
                    </div>

                <div onClick = {() => handleClick(true)}>
                    <h4>YES</h4>
                </div>
                <div onClick = {() => handleClick(false)}>
                    <h4>NO</h4>
                </div>
            </div>
        </div>
    )
}

export default PopUp;
