import './css/App.css';
import ToDoList from './ToDoList';
import Login from './Login';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {

  const [loginStatus, setLoginStatus] = useState(false);

  const loginHandler = (status) =>{
    setLoginStatus(status);
  } 

  useEffect(() =>{

    axios.get('http://127.0.0.1:5000/checkUserAuthentication', {
      headers: {
        'x-access-token': localStorage.getItem('token')
      }
    }).then( (response) =>{

      if(response.data.auth){
        setLoginStatus(true);
      };
    });

}, []);

  return (
    loginStatus?
    <div className="container">
      <div className="row">
        <div className="col-6 offset-3">
        <ToDoList/>
        </div>
      </div>
    </div>
    :
    <Login loginHandler = {loginHandler}/>
  );
}

export default App;
