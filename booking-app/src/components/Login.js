import '../css/Login.css'

import React from 'react';

const Login = () => {
    return (
        <div className="Login container">
            <div className="row outer-row align-items-center justify-content-center">
                <div className="col-12 main-col">
                        <div className="row form-row">
                            <div className="form-inline">
                                <div className="form-group">
                                <label htmlFor="" className ="col-3">Username</label>
                                <div className="col-9">
                                    <input type="text" placeholder = "Enter Username" className="form-control"/>
                                </div>
                                <label htmlFor="" className ="col-3">Password</label>
                                <div className="col-9">
                                    <input type="text" placeholder = "Enter Username" className="form-control"/>
                                </div>
                                <div className="col-9 offset-3">
                                    <button type="submit">Log In</button>
                                </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
