import '../css/App.css';
import fireb from './Firebase.js';
import Login from './Login';
import ReserveTable from './ReserveTable'
import PrivateRoute from './PrivateRoute'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, {useState, useEffect} from 'react';


const App = () => {

  const [currentUser, setCurrentUser] = useState()

  useEffect( () =>{
    fireb.auth().onAuthStateChanged(function(user) {
      if (user) {
        setCurrentUser(user.email)
      } else {
      }
    });
  })

  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/login"]}>
          <Login/>
        </Route>
        <PrivateRoute exact path = {"/reservetable"} currentUser = {currentUser}>
        </PrivateRoute>
      </Switch>
    </Router>
  )};

export default App;
