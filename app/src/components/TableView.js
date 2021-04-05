import React, {useState, useEffect} from 'react'
import {Redirect, browserHistory} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const TableView = (props) => {

    const [loggedIn, setLoggedIn] = useState(props.currentUser==null?false:true);

    useEffect( () =>{

        console.log(props);
    },[props])

    return (

        loggedIn==null?
        <div className="container MainSection">
            <div className="row justify-content-center">
                <div className="col-12 loader">
                    <ClipLoader color={"#000000"} loading={true} css={"text-align:center"} size={400} /> 
                </div>
            </div>
        </div>
        :
        loggedIn?
        <>  
            <div>
                {/* <h3>{customerFName}</h3> */}
                {/* <h3>{customerLName}</h3> */}
                New Component in a Private Route
            </div>
        </>
        :
        <Redirect to ="/login"/>
    )
}

export default TableView;