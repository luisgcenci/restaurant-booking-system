import {Route, Redirect} from "react-router-dom";


const PrivateRoute = ({ component: Component, currentUser, component, ...rest}) => {
    

    return (
        <Route {...rest} render={(props) =>(
            currentUser?
            <Component {...component} {...props}/>
            :
            <Redirect to ="/login"/>
        )}/>
    )
}

export default PrivateRoute;