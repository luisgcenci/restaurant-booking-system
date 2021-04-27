import firebase                     from './Firebase.js';
import React,{useState, useEffect}  from 'react';
import { Redirect }                 from "react-router-dom";
import { useLastLocation }          from 'react-router-last-location';
import ClipLoader                   from "react-spinners/ClipLoader";
import '../css/Login.css';
import "firebase/auth";

const Login = ({currentUser}) => {

    const [userEmail, setUserEmail]         = useState("");
    const [password, setPassword]           = useState("");
    const [userSignedIn, setUserSignedIn]   = useState(null);

    const lastLocation  = useLastLocation();

    useEffect( () =>{

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                setUserSignedIn(true);
                return;
            }
            setUserSignedIn(false);
        });
    }, [])

    const handleLogin = (e) => {

        e.preventDefault();
        
        firebase.auth().signInWithEmailAndPassword(userEmail, password)
        .then((userCredential) => {
        //   var user = userCredential.user;
        })
        .catch((error) => {
          var errorMessage = error.message;
          console.log(errorMessage);
        });
    }

    return (
        userSignedIn==null?
        <div className="container MainSection">
            <div className="row justify-content-center">
                <div className="col-12 loader">
                    <ClipLoader 
                        color={"#000000"} 
                        loading={true} 
                        css={"text-align:center"} 
                        size={400} 
                    /> 
                </div>
            </div>
        </div>
        :
        userSignedIn?
        <Redirect 
            to={{
                pathname    : lastLocation==null?'/reservetable':lastLocation['pathname'],
                state       : {currentUser : currentUser}
            }}
        />
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
