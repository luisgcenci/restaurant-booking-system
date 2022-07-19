import React from 'react'
import RegisterAccount from './components/RegisterAcc'
import Login from './components/Login'
import { Routes, Route, Navigate } from "react-router-dom";
import styles from './AuthApp.module.css';

const AuthApp = () => {
  return (
    <div className={styles.AuthApp}>
      <Routes>
        <Route path='*' element={<Navigate replace to='/signin'/>}/>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/signup' element={<RegisterAccount/>}/>
      </Routes>
    </div>
  )
}

export default AuthApp