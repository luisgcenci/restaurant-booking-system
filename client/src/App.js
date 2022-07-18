import './css/App.css';
import InternalApp from './apps/internal-app/InternalApp';
import AuthApp from './apps/auth-app/AuthApp';
import React, {useState, useEffect} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/store'
import axios from 'axios';

const App = () => {

  const [loginStatus, setLoginStatus] = useState(false);

  const loginHandler = (status) =>{
    setLoginStatus(status);
  } 

  useEffect(() =>{
    axios.get('http://127.0.0.1:5000/api/v1/user/auth', {
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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className='App'>
          {loginStatus ?
            <InternalApp/>
            :
            <AuthApp loginHandler={loginHandler}/>
          }
        </div>
      </PersistGate>
    </Provider>
    
  );
}

export default App;
