import React, {useState, useEffect} from 'react';
import moment from 'moment';
import styles from './css/ReserveUserSection.module.css'
import Button from './Button';

const ReserveUserSection = ({currentUser, logOutHandler}) => {

    //user session
    const [date, setDate] = useState(moment().format('L'));
    const [time, setTime] = useState(moment().format('hh:mm:ss a'));

    useEffect( () =>{
        let interval = setInterval( () => {
            setDate(moment().format('L'));
            setTime(moment().format('hh:mm:ss a'));
        }, 1000)

        return clearInterval(interval);
    })

    return (
        <div className={styles.ReserveUserSection}>
            <div className={styles.LogOut}>
                <Button
                    title='logout'
                />
            </div>
            <div className={styles.Session}>
                <div className={styles.SessionInfo}>
                    <p id={styles.SessionText}>CURRENT SESSION</p>
                    <p>USER: {currentUser}</p>
                    <p>DATE: {date} </p>
                    <p>TIME: {time} </p>
                </div>
            </div>
        </div>
    )
}

export default ReserveUserSection;
