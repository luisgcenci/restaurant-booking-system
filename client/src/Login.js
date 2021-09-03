import React, {useState} from 'react';
import axios from 'axios';
import './css/Login.css'

const Login = ({loginHandler}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) =>{

        e.preventDefault();
        axios.post('/login', {
            username: username,
            password: password
        }).then ((response) =>{

            if (response.data.auth){
                console.log(response.data);
                setUsername("");
                setPassword("");
                localStorage.setItem('token', response.data.token);
                loginHandler(true);
            }
            else{
                console.log(response.data);
            }
        })
    }

    const handleInputChange = (event) =>{

        var inputChanged = event.target.name;
        
        if (inputChanged === 'username'){
            setUsername(event.target.value);
        }
        else if(inputChanged === 'password'){
            setPassword(event.target.value);
        }
    }

    return (
        <div className='Login container'>
            <div className="row">
                <div className="col-4 offset-4">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-4">
                                <label>
                                    Username:
                                </label>
                            </div>
                            <div className="col-md-8">
                                <input 
                                    type="text" 
                                    name="username"
                                    value={username}
                                    onChange={handleInputChange} 
                                />
                            </div>
                            <div className="col-md-4">
                                <label>
                                    Password:
                                </label>
                            </div>
                            <div className="col-md-8">
                                <input 
                                    type="text" 
                                    name="password"
                                    value={password}
                                    onChange={handleInputChange}     
                                />
                            </div>

                            <div className="col-md-8 offset-md-4 input-submit">
                                <input type="submit" value="Submit"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
