import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from '../css/RegisterAcc.module.css'

const RegisterAcc = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const submitForm = (e) =>{

        e.preventDefault();
        
        axios.post('api/v1/user/signup', {
            username: username,
            password: password
        }).then ((response) =>{

            if (response.data.jwt_token){
                setUsername('');
                setPassword('');
                setErrorMessage('');
                localStorage.setItem('token', response.data.jwt_token);
            }
        }).catch((err) => {
            let message = err;
            if (err.response) message = err.response.data
            setErrorMessage(message);
        });
    }

    return (
        <div className={styles.RegisterAcc}>
            <div className={styles.Form}>
                <div className={styles.Username}>
                    <label>Username</label>
                    <input 
                        name='username'
                        value={username}
                        placeholder='example@gmail.com'
                        type='email'
                        onChange={(e) => setUsername(e.target.value)}>
                    </input>
                </div>
                <div className={styles.Password}>
                    <label>Password</label>
                    <input 
                        name='password'
                        value={password}
                        placeholder='******'
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </div>
                <div className={styles.Submit}>
                    <input
                        value='Register Account'
                        type='submit'
                        onClick={submitForm}>
                    </input>
                </div>
                <div className={styles.SubMessage}>
                    <p>Already have an account? 
                    <Link id={styles.signin} to='/signin'>Sign In.</Link>
                    </p>
                </div>
                <div className={styles.ErrorMessage}>
                    <p>{errorMessage}</p>
                </div>
            </div>
        </div>
    );
}

export default RegisterAcc;
