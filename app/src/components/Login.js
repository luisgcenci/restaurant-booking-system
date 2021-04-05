import '../css/Login.css';
import fireb from './Firebase.js';
import React,{useState, useEffect} from 'react';
import { Redirect } from "react-router-dom";
import { useLastLocation } from 'react-router-last-location';
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {

    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userSignedIn, setUserSignedIn] = useState(null);

    const lastLocation = useLastLocation();

    useEffect( () =>{

        fireb.auth().onAuthStateChanged(function(user) {
            if (user) {
                setUserSignedIn(true);
            } else {
                setUserSignedIn(false);
            }
        });
    })

    const handleLogin = (e) => {

        e.preventDefault();
        
        fireb.auth().signInWithEmailAndPassword(userEmail, password)
        .then((userCredential) => {
          var user = userCredential.user;
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
        });
    }
    
    return (
        userSignedIn==null?
        <div className="container MainSection">
            <div className="row justify-content-center">
                <div className="col-12 loader">
                    <ClipLoader color={"#000000"} loading={true} css={"text-align:center"} size={400} /> 
                </div>
            </div>
        </div>
        :
        userSignedIn?
        <Redirect to={lastLocation==null?'/reservetable':lastLocation['pathname']}/>
        :
        <div className="Login container">
            <div className="row outer-row align-items-center justify-content-center">
                <div className="col-12 main-col">
                        <div className="row form-row">
                            <form className="form-inline">
                                <div className="form-group">
                                    <label htmlFor="" className ="col-3">Username</label>
                                    <div className="col-9">
                                        <input type="text" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder = "Enter Username" className="form-control"/>
                                    </div>
                                    <label htmlFor="" className ="col-3">Password</label>
                                    <div className="col-9">
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder = "Enter Password" className="form-control"/>
                                    </div>
                                    <div className="col-9 offset-3">
                                        <button id = "defaultButton" onClick={handleLogin}type="submit">Log In</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
