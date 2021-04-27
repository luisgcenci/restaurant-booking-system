import fireb                                    from './Firebase.js';
import Login                                    from './Login';
import ReservePage                              from './ReservePage'
import PrivateRoute                             from './PrivateRoute'
import TableView                                from './TableView'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, {useState, useEffect}             from 'react';
import { LastLocationProvider }                 from 'react-router-last-location';
import '../css/App.css';

const App = () => {

  const [currentUser, setCurrentUser] = useState()

  useEffect( () =>{
    fireb.auth().onAuthStateChanged(function(user) {
      if (user) {
        setCurrentUser(user.email)
      }
    });
  })

  return (
    <Router>
      <Switch>
        <LastLocationProvider>
          <Route exact path={["/", "/login"]}>
            <LastLocationProvider>
              <Login 
                currentUser = {currentUser}
              />
            </LastLocationProvider>
          </Route>
          <PrivateRoute 
            exact path  = {"/reservetable"} 
            currentUser = {currentUser} 
            component   = {ReservePage}
          />
          <PrivateRoute
            exact path  = {"/tableview"}
            currentUser = {currentUser}
            component   = {TableView}>
          </PrivateRoute>
        </LastLocationProvider>
      </Switch>
    </Router>
  )};

export default App;
