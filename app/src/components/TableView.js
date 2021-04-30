import React, {useState, useEffect}     from 'react'
import {Redirect, Link}                 from "react-router-dom";
import ClipLoader                       from "react-spinners/ClipLoader";
import TablesTypeOne                    from './TablesTypeOne'
import TablesTypeTwo                    from './TablesTypeTwo'
import TablesTypeThree                  from './TablesTypeThree'
import PopUp                            from './PopUp'
import firebase                         from './Firebase.js';
import {Stage, Layer}                   from 'react-konva'
import moment                           from 'moment';
import '../css/TableView.css'

const TableView = (props) => {

    const [loggedIn         , setloggedIn]          = useState(props.location.state.currentUser? true : false);
    const [customerFirstName, setCustomerFirstName] = useState(props.location.state.customerFName);
    const [customerLastName , setCustomerLastName]  = useState(props.location.state.customerLName);
    const [numberOfPeople   , setNumberOfPeople]    = useState(props.location.state.numberOfPeople);
    const [currentUser      , setCurrentUser]       = useState(props.location.state.currentUser);
    const [hovering         , setHovering]          = useState('default');
    const [openPopUp        , setopenPopUp]         = useState(false);
    const [tableIdPicked    , setTableIdPicked]     = useState(undefined);
    const [startDate        , setStartDate]         = useState(moment(props.location.state.startDate));
    const [endDate          , setEndDate]           = useState(moment(props.location.state.endDate));
    const [tablesIds        , setTablesIds]         = useState(new Map());

    const database = firebase.database();

    useEffect( () =>{
        let starCountRef            = database.ref('/company/tables/');
        let data                    = undefined;
    
        //check if tables are booked or not for time given
        starCountRef.on('value', (snapshot) => {
            data = snapshot.val();
            let map = new Map();
            
            Object.keys(data).map( d => {
    
                let booked = false;
                
                let dbTodayDateFormatted    = startDate.format('L').replaceAll('/','-');
                let reservations            = data[d]['reservations'];
                
                if (reservations){
                    let todayReservations = reservations[dbTodayDateFormatted];
                    
                    if (todayReservations){
    
                        Object.keys(todayReservations).map(r =>{
    
                            let from = moment(todayReservations[r]['from']);
                            let to = moment(todayReservations[r]['to']);
    
                            booked =    startDate.isBetween(from   , to, undefined, '[)')   | 
                                        endDate.isBetween(from, to, undefined, '(]')        |
                                        from.isBetween(startDate, endDate, undefined, '()') |
                                        to.isBetween(startDate, endDate, undefined, '()')
                            ? true 
                            : false;

                            if (!booked){

                            }
                        })
    
                    }
                }
    
                map.set(d, booked);
            });
    
            setTablesIds(map);
        });
    }, [])

    const handleHovering    = (h)        =>{
        setHovering(h);
    }

    const handlePopUp       = (openPopUp, id)   =>{
        setTableIdPicked(id);
        setopenPopUp(openPopUp);
    }
    
    const handleReservation = ()                =>{
        
        let dateFormatted   = startDate.format('L');
        dateFormatted       = dateFormatted.replaceAll("/","-");
        let r               = Math.random().toString(36).substr(2, 9);
        handlePopUp(false);
        database.ref('company/tables/' + tableIdPicked + "/reservations/" + dateFormatted + "/" + r + "/"
        
        ).set({
            username            : currentUser,
            first_name          : customerFirstName,
            last_name           : customerLastName,
            from                : startDate.format(),
            to                  : endDate.format(),
            number_of_people    : numberOfPeople
        });
    }

    const sliceMap = (map, start, end) =>{

        let tmpArray = Array.from(map).slice(start, end);

        return new Map(tmpArray);

    }

    return (

        loggedIn==null | tablesIds.size == 0?
        <div className="container MainSection">
            <div className="row justify-content-center">
                <div className="col-12 loader">
                    <ClipLoader 
                        color   = {"#000000"} 
                        loading = {true} 
                        css     = {"text-align:center"} 
                        size    = {400} 
                    /> 
                </div>
            </div>
        </div>
        :
        loggedIn?
        <div className="TableView" style={{cursor: hovering}}>
            <div className = "container-fluid user-section">
                <div className="row">
                    <div className="col-md-1 col-6 offset-md-4 exit">
                        <Link to={{
                            pathname    : "/reservetable",
                            state       : {
                                currentUser : currentUser
                            }   
                        }}>
                        EXIT</Link>
                    </div>
                    {(startDate) &&
                        <div className="col-md-3 col-6 info">   
                            <p>{startDate.format('hh:mm a')}</p>
                            <p>{startDate.format('L')}</p>    
                        </div>
                    }
                </div>
            </div>
            <div className="container-fluid canvas-area">
                <div className="row">
                    <div className="col-12 canvas-area">
                        <Stage width={1520} height={800}>
                            <Layer>
                                <TablesTypeOne   
                                    ids             = {sliceMap(tablesIds, 0, 4)} 
                                    handleHovering  = {handleHovering}
                                    handlePopUp     = {handlePopUp}
                                    x               = {0}
                                    startDate       = {startDate}
                                    endDate         = {endDate}
                                />
                                <TablesTypeTwo   
                                    ids             = {sliceMap(tablesIds, 4, 8)} 
                                    handleHovering  = {handleHovering} 
                                    x               = {450}
                                    handlePopUp     = {handlePopUp}
                                    startDate       = {startDate}
                                    endDate         = {endDate}
                                />
                                <TablesTypeThree 
                                    ids             = {sliceMap(tablesIds, 8, 11)} 
                                    handleHovering  = {handleHovering} 
                                    x               = {740}
                                    handlePopUp     = {handlePopUp}
                                    startDate       = {startDate}
                                    endDate         = {endDate}
                                />
                                <TablesTypeTwo   
                                    ids             = {sliceMap(tablesIds, 11, 15)} 
                                    handleHovering  = {handleHovering} 
                                    x               = {950}
                                    handlePopUp     = {handlePopUp}
                                    startDate       = {startDate}
                                    endDate         = {endDate}
                                />
                                <TablesTypeOne   
                                    ids             = {sliceMap(tablesIds, 15, 19)} 
                                    handleHovering  = {handleHovering}
                                    x               = {1220 }
                                    handlePopUp     = {handlePopUp}
                                    startDate       = {startDate}
                                    endDate         = {endDate}
                                />
                            </Layer>
                        </Stage>
                    </div>
                </div>
            </div>
            {   
                openPopUp?
                <>
                    <PopUp 
                        handlePopUp         = {handlePopUp}
                        handleReservation   = {handleReservation}
                    />
                </>
                :
                <div>
                </div>
            }
        </div>
        :
        <Redirect to ="/login"/>
    )
}

export default TableView;