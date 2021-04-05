import React,{useState, useEffect} from 'react';
import {Redirect} from "react-router-dom";
import '../css/ReservePage.css';
import ReserveMainSection from './ReserveMainSection';
import ReserveUserSection from './ReserveUserSection';
import ClipLoader from "react-spinners/ClipLoader";

const ReservePage = ({currentUser}) => {

    const [loggedIn, setLoggedIn] = useState(currentUser==null?false:true);
    

    const logOutHandler = (userStatus) =>{
        setLoggedIn(userStatus);
    }

    return (
        loggedIn==null?
        <div className="container MainSection">
            <div className="row justify-content-center">
                <div className="col-12 loader">
                    <ClipLoader color={"#000000"} loading={true} css={"text-align:center"} size={400} /> 
                </div>
            </div>
        </div>
        :
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

