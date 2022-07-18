import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from '../css/Login.module.css'
import { useAppDispatch } from '../../../hooks/hooks';
import { updateUsername } from '../../../store/features/userSlice';

const Login = ({loginHandler}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useAppDispatch();

    const submitForm = (e) =>{

        e.preventDefault();

        axios.post('http://127.0.0.1:5000/api/v1/user/signin', {
            username: username,
            password: password
        }).then ((response) =>{

            if (response.data.jwt_token){
                dispatch(updateUsername(username));
                setUsername('');
                setPassword('');
                setErrorMessage('');
                localStorage.setItem('token', response.data.jwt_token);
                loginHandler(true);
                console.log('signed in');
            }
            else{
                loginHandler(false);
            }
        }).catch((err) => {
            const message = err.response.data
            setErrorMessage(message);
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
