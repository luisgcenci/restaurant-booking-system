import {
    Route,
    Redirect
} from "react-router-dom";
import ReservePage from './ReservePage';


const PrivateRoute = ({ component: Component, currentUser, ...rest}) => {
    
    return ( 
        <Route {...rest} render={(props) =>(
            
            currentUser?
            <ReservePage currentUser={currentUser}/>
            :
            <Redirect to ="/login"/> 
        )} />
    )
}

export default PrivateRoute;