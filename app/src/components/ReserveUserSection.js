import React,{useState, useEffect}  from 'react';
import fireb                        from './Firebase.js';
import moment                       from 'moment';
import '../css/ReserveUserSection.css'

const ReserveUserSection = ({currentUser, logOutHandler}) => {

    //user session
    const [date, setDate] = useState(moment().format('L'));
    const [time, setTime] = useState(moment().format('hh:mm:ss a'));

    useEffect( () =>{
        setInterval( () => {
            setDate(moment().format('L'));
            setTime(moment().format('hh:mm:ss a'));
        }, 1000)

        // return (setDate(""), setTime(""));
    })

    const buttonHandler = () =>{
        fireb.auth().signOut().then(() => {
            console.log("signed out");
            logOutHandler(false);
        }).catch((error) => {
            console.log("error")
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <button id="logOutButton" onClick={buttonHandler}>logout</button>
                </div>
                <div className="col-3 UserSession">
                    <p id="SessionText">CURRENT SESSION</p>
                    <p>USER: {currentUser}</p>
                    <p>DATE: {date} </p>
                    <p>TIME: {time} </p>
                </div>
            </div>
        </div>
    )
}

export default ReserveUserSection;
