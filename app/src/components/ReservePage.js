import React,{useState, useEffect} from 'react';
import {Redirect} from "react-router-dom";
import '../css/ReservePage.css';
import ReserveMainSection from './ReserveMainSection';
import ReserveUserSection from './ReserveUserSection';

const ReservePage = ({currentUser}) => {

    const [loggedIn, setLoggedIn] = useState(currentUser == null?false:true);

    const logOutHandler = (userStatus) =>{
        setLoggedIn(userStatus);
    }

    return (
        loggedIn?
        <>  
            <ReserveUserSection currentUser = {currentUser} logOutHandler = {logOutHandler}></ReserveUserSection>
            <ReserveMainSection/>
        </>
        :
        <Redirect to ="/login"/>
    )
}

export default ReservePage;

