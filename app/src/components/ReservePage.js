import React,{useState}             from 'react';
import {Redirect}                   from "react-router-dom";
import ReserveMainSection           from './ReserveMainSection';
import ReserveUserSection           from './ReserveUserSection';
import ClipLoader                   from "react-spinners/ClipLoader";
import '../css/ReservePage.css';

const ReservePage = (props) => {

    const [loggedIn, setLoggedIn] = useState(props.location.state.currentUser==null?false:true);
    
    const logOutHandler = (userStatus) =>{
        setLoggedIn(userStatus);
    }

    const currentUser = props.location.state.currentUser;

    return (
        loggedIn==null?
        <div className="container MainSection">
            <div className="row justify-content-center">
                <div className="col-12 loader">
                    <ClipLoader 
                        color   = {"#000000"} 
                        loading = {true} 
                        css     = {"text-align:center"} 
                        size    = {400} 
                    /> 
                </div>
            </div>
        </div>
        :
        loggedIn?
        <>  
            <ReserveUserSection 
                currentUser     = {currentUser} 
                logOutHandler   = {logOutHandler}
            />
            <ReserveMainSection 
                currentUser     = {currentUser} 
            />
        </>
        :
        <Redirect to ="/login"/>
    )
}

export default ReservePage;

