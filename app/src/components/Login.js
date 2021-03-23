import '../css/Login.css';
import fire from './Firebase.js';

import React,{useState} from 'react';

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (e) => {

        fire.database().ref('users/' + username).set({
        username: username,
        password: password
    });
        setUsername("");
        setPassword(""); 
    }


    return (
        <div className="Login container">
            <div className="row outer-row align-items-center justify-content-center">
                <div className="col-12 main-col">
                        <div className="row form-row">
                            <form className="form-inline">
                                <div className="form-group">
                                <label htmlFor="" className ="col-3">Username</label>
                                <div className="col-9">
                                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder = "Enter Username" className="form-control"/>
                                </div>
                                <label htmlFor="" className ="col-3">Password</label>
                                <div className="col-9">
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder = "Enter Username" className="form-control"/>
                                </div>
                                <div className="col-9 offset-3">
                                    <button onClick={handleLogin}type="submit">Log In</button>
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