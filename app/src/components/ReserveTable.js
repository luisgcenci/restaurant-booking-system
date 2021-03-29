import React,{useState, useEffect} from 'react';
import {Redirect} from "react-router-dom";
import '../css/ReserveTable.css';
import fireb from './Firebase.js';
import {createStore} from 'redux';

const ReserveTable = ({currentUser}) => {

    const [date, setDate] = useState(new Date().toLocaleDateString("en-US"));
    const [time, setTime] = useState(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());
    const [loggedIn, setLoggedIn] = useState(currentUser == null?false:true);

    const logOutHandler = () =>{
        fireb.auth().signOut().then(() => {
            console.log("signed out");
            setLoggedIn(false);
        }).catch((error) => {
            console.log("error")
        });
    }

    useEffect( () =>{
        setInterval( () => {
            setDate(new Date().toLocaleDateString("en-US"));
            setTime(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());
        }, 1000)
    })

    return (
        loggedIn?
        <div className="ReserveTable">
            <div className = "UserSession">
                <p id="SessionText">CURRENT SESSION</p>
                <p>USER: {currentUser}</p>
                <p>DATE: {date} </p>
                <p>TIME: {time} </p>
            </div>
            <button onClick={logOutHandler}>logout</button>
        </div>
        :
        <Redirect to ="/login"/>
    )
}

export default ReserveTable;

