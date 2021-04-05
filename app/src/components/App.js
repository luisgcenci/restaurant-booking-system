import '../css/App.css';
<<<<<<< HEAD
import fireb from './Firebase.js';
import Login from './Login';
import ReservePage from './ReservePage'
import PrivateRoute from './PrivateRoute'
import TableView from './TableView'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import { LastLocationProvider } from 'react-router-last-location';


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
        <LastLocationProvider>
          <Route exact path={["/", "/login"]}>
            <LastLocationProvider>
              <Login/>
            </LastLocationProvider>
          </Route>
          <PrivateRoute 
            exact path = {"/reservetable"} 
            currentUser = {currentUser} 
            component={ReservePage}>
          </PrivateRoute>
          <PrivateRoute
            exact path = {"/tableview"} 
            currentUser = {currentUser} 
            component={TableView}>
          </PrivateRoute>
        </LastLocationProvider>
      </Switch>
    </Router>
=======
import Login from './Login';

function App() {
  return (
    <>
      <Login />
    </>
>>>>>>> dc39a276ab24a64603f5633528b55556894949c1
  )};

export default App;
