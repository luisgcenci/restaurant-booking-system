import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from '../css/Login.module.css'
import { useAppDispatch } from 'hooks/hooks';
import { updateAuth, updateToken, updateUsername } from 'store/features/userSlice';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useAppDispatch();

    const submitForm = (e) =>{

        e.preventDefault();

        axios.post(`api/v1/user/signin`, {
            username: username,
            password: password
        }).then ((response) =>{

            if (response.data.jwt_token){
                dispatch(updateUsername(username));
                dispatch(updateToken(response.data.jwt_token));
                dispatch(updateAuth(true));
                setUsername('');
                setPassword('');
                setErrorMessage('');
            }
        }).catch((err) => {
            if (err.response){
                setErrorMessage(err.response.data);
            }
            console.log(err);
        });
    }

    return (
        <div className={styles.Login}>
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
                        value='Log In'
                        type='submit'
                        onClick={submitForm}>
                    </input>
                </div>
                <div className={styles.SubMessage}>
                    <p>Don't have an account? 
                        <Link id={styles.signup} to='/signup'>Sign up.</Link>
                    </p>
                </div>
                <div className={styles.ErrorMessage}>
                    <p>{errorMessage}</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
