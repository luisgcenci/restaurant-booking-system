import React from 'react'
import RegisterAccount from './components/RegisterAcc'
import Login from './components/Login'
import { Routes, Route, Navigate } from "react-router-dom";


const AuthApp = ({loginHandler}) => {
  return (
    <Routes>
      <Route path='*' element={<Navigate replace to='/signin'/>}/>
      <Route path='/signin' element={<Login loginHandler = {loginHandler}/>}/>
      <Route path='/signup' element={<RegisterAccount/>}/>
    </Routes>
  )
}

export default AuthApp