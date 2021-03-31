import React,{useState, useEffect} from 'react';
import fireb from './Firebase.js';
import '../css/ReserveUserSection.css'

const ReserveUserSection = ({currentUser, logOutHandler}) => {

    //user session
    const [date, setDate] = useState(new Date().toLocaleDateString("en-US"));
    const [time, setTime] = useState(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());

    useEffect( () =>{
        setInterval( () => {
            setDate(new Date().toLocaleDateString("en-US"));
            setTime(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());
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
