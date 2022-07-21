import React, {useState} from 'react'
import styles from './css/Form.module.css'
import FormItem from './FormItem'
import Button from './Button'
import AlertMessage from './AlertMessage'
import axios from 'axios'
import { useAppSelector, useAppDispatch } from 'hooks/hooks'
import { updateUsername } from 'store/features/userSlice'

const Form = () => {

    const user = useAppSelector((state) => state.user);
    const [message, setMessage] = useState('');
    const [messageSign, setMessageSign] = useState(null);
    const [username, setUsername] = useState(useAppSelector((state) => state.user.username));
    const [persistentUsername] = useState(useAppSelector((state) => state.user.username));
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const dispatch = useAppDispatch();

    const handleUsernameUpdate = (e) =>{

        if (username.length === 0){
            setMessage('No information was provided. Username not updated.');
            setMessageSign(false);
            return;
        }

        axios.post('api/v1/user/updateusername', {
            newUsername: username,
            token: user.token
        }).then ((response) =>{
            if (response){
                let status = response.status;
                let data = response.data;
                let okStatus = [200, 201];

                if (okStatus.includes(status) && data.username){
                    dispatch(updateUsername(data.username));
                    setMessage('Username updated.');
                    setMessageSign(true);
                    return;
                }else{
                    setMessage('Username not updated.');
                    setMessageSign(false);
                }
            }
        }).catch((err) => {
            console.log(err);
            setMessage('Username not updated.');
            setMessageSign(false);
        });
    }

    const handleUpdatePassword = (e) =>{

        axios.post('api/v1/user/updatepassword', {
            username: persistentUsername,
            password: password,
            newPassword: newPassword
        }).then ((response) =>{
            if (response){
                let status = response.status;
                let data = response.data;
                let okStatus = [200, 201];

                if (okStatus.includes(status) && data.message){
                    setMessage(data.message);
                    setMessageSign(true);
                    setPassword('');
                    setNewPassword('');
                    return;
                }
            }
        }).catch((err) => {
            let response = err.response;
            setMessage(response.data + ' (' + response.statusText + ')');
            setMessageSign(false);
        });
    }

    return (
    <div className={styles.Form}>
        <div className={styles.FormSection}>
            <FormItem 
                type='text'
                label='Username'
                placeholder='example@gmail.com'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Button 
                title='Update Username'
                onClick={handleUsernameUpdate}
            />
        </div>
        <div className={styles.FormSection}>
            <FormItem
                type='password'
                label='Password'
                placeholder='Current Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <FormItem
                type='password'
                label='New Password'
                placeholder='New Password'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <Button 
                title='Change Password'
                onClick={handleUpdatePassword}
            />
        </div>
        <div className={styles.FormSection}>
            <AlertMessage 
                error={message}
                sign={messageSign}
            />
        </div>
    </div>
  )
}

export default Form