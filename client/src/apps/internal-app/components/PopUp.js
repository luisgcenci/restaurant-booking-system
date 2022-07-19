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
        <div className={styles.PopUpBackground}>
            <div className={styles.PopUp}>
                <div className={styles.Title}>
                    <h4>CONFIRM TABLE RESERVATION?</h4>
                </div>
                <div className={styles.ConfirmationInfo}>
                    <div className={styles.ConfirmationInfo}>
                        <p>FROM: <span>{moment(props.from).format('MMMM Do YYYY, h:mm:ss a')}</span></p>
                        <p>TO: <span>{moment(props.to).format('MMMM Do YYYY, h:mm:ss a')}</span></p>
                        <p>FIRST NAME : <span>{props.first_name}</span></p>
                        <p>LAST NAME : <span>{props.last_name}</span></p>
                    </div>
                </div>
                <div className={styles.Buttons}>
                    <div className={styles.Button} id={styles.ButtonGreen} onClick = {() => handleClick(true)}>
                        <h4>YES</h4>
                    </div>
                    <div className={styles.Button} id={styles.ButtonRed} onClick = {() => handleClick(false)}>
                        <h4>NO</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUp;
