import {
    Route,
    Redirect
} from "react-router-dom";
import ReservePage from './ReservePage';


const PrivateRoute = ({ component: Component, currentUser, component, ...rest}) => {
    
    return (
        <Route {...rest} render={(props) =>(
            currentUser?
            <Component {...component} currentUser = {currentUser} />
            :
            <Redirect to ="/login"/>
        )}/>
    )
}

export default PrivateRoute;