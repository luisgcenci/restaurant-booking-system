import React, {useState} from 'react'
import {Redirect, Link} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import '../css/TableView.css'
import TablesTypeOne from './TablesTypeOne'
import TablesTypeTwo from './TablesTypeTwo'
import TablesTypeThree from './TablesTypeThree'

const TableView = (props) => {

    const [loggedIn, setloggedIn] = useState(props.location.state.currentUser? true : false);
    const [datePicked, setDatePicket] = useState(props.location.state.datePicked);
    const [startTime, setStartTime] = useState(props.location.state.startTime);
    const [endTime, setEndTime] = useState(props.location.state.endTime);
    const [customerFirstName, setCustomerFirstName] = useState(props.location.state.customerFName);
    const [customerLastName, setCustomerLastName] = useState(props.location.state.customerLName);
    const [numberOfPeople, setNumberOfPeople] = useState(props.location.state.numberOfPeople);
    const [currentUser, setCurrentUser] = useState(props.location.state.currentUser);

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
            <div className="TableView">
                <div className = "container-fluid user-section">
                    <div className="row">
                        <div className="col-md-1 col-6 offset-md-4 exit">
                            <Link to={{
                                pathname: "/reservetable",
                                state:{
                                    currentUser : currentUser
                                }   
                            }}>
                            EXIT</Link>
                        </div>
                        <div className="col-md-3 col-6 info">
                            <p>{startTime}</p>
                            <p>{datePicked.getMonth() + 1 + "/" + datePicked.getDate() + "/" + datePicked.getFullYear()}</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid canvas-area">
                    <div className="row">
                        <div className="col-3">
                            <TablesTypeOne/>
                        </div>
                        <div className="col-2">
                            <TablesTypeTwo/>
                        </div>
                        <div className="col-2">
                            <TablesTypeThree/>
                        </div>
                        <div className="col-2">
                            <TablesTypeTwo/>
                        </div>
                        <div className="col-3">
                            <TablesTypeOne/>
                        </div>
                    </div>
                </div>
            </div>
            </>

        :
        <Redirect to ="/login"/>
    )
}

export default TableView;