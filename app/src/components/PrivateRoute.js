import {
    Route,
    Redirect
} from "react-router-dom";
import {UseEffect} from 'react';
import ReserveTable from './ReserveTable';
import ClipLoader from "react-spinners/ClipLoader";


const PrivateRoute = ({ component: Component, currentUser, ...rest}) => {
    
    return ( 
        <Route {...rest} render={(props) =>(
            
            currentUser?
            <ReserveTable currentUser={currentUser}/>
            :
            <Redirect to ="/login"/>
            // <ClipLoader color={"#000000"} loading={true} css={""} size={150} />   
        )} />
    )
}

export default PrivateRoute;