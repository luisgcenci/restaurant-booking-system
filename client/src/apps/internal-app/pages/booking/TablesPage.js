import React, {useState, useRef, useEffect }     from 'react'
import styles from './css/TablesPage.module.css'
import { useAppSelector } from 'hooks/hooks';
import {Link, useNavigate} from "react-router-dom";
import {Stage, Layer} from 'react-konva'
import moment from 'moment';
import TablesTypeOne from 'apps/internal-app/components/TablesTypeOne'
import TablesTypeTwo from 'apps/internal-app/components/TablesTypeTwo'
import TablesTypeThree from 'apps/internal-app/components/TablesTypeThree'
import PopUp from 'apps/internal-app/components/PopUp'
import axios from 'axios';

const TablesPage = () => {

    const navigate = useNavigate();
    const user = useAppSelector((state) => state.user);
    const reservation = useAppSelector((state) => state.reservation)

    const [customerFirstName] = useState(reservation.customerFName);
    const [customerLastName] = useState(reservation.customerLName);
    const [currentUser] = useState(user.username);
    const [startDate] = useState(moment(reservation.startDate));
    const [endDate] = useState(moment(reservation.endDate));
    const [hovering, setHovering] = useState('default');
    const [openPopUp, setopenPopUp] = useState(false);
    const [tableIdPicked, setTableIdPicked] = useState(undefined);
    const [tablesIds, setTablesIds] = useState(undefined);

    const [stageWidth, setStageWidth] = useState(null);
    const stageRef = useRef(null);

    useEffect(() => {
        
        let data = undefined;
        axios.get('http://127.0.0.1:5000/api/v1/company/tables/?companyName=The Little Eatery')
        .then((response) => {
            // check if tables are booked or not for time given
            data = response.data;
            let map = new Map();
            
            Object.keys(data).map( (d) => {
                
                let booked = false;
                
                let dbTodayDateFormatted = startDate.format('L').replaceAll('/','-');
                let reservations = data[d]['reservations'];
                
                if (reservations){
                    let todayReservations = reservations[dbTodayDateFormatted];
                    
                    if (todayReservations){
    
                        Object.keys(todayReservations).map(r =>{
    
                            let from = moment(todayReservations[r]['from']);
                            let to = moment(todayReservations[r]['to']);
    
                            booked = startDate.isBetween(from   , to, undefined, '[)')   | 
                                endDate.isBetween(from, to, undefined, '(]')        |
                                from.isBetween(startDate, endDate, undefined, '()') |
                                to.isBetween(startDate, endDate, undefined, '()')
                            ? true 
                            : false;
                        })
    
                    }
                }
                map.set(d, booked);
            });
            
            setTablesIds(map);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const handleHovering = (h) => {
        setHovering(h);
    }

    const handlePopUp = (openPopUp, id) =>{
        setTableIdPicked(id);
        setopenPopUp(openPopUp);
    }
    
    const handleReservation = () => {
        
        let dateFormatted = startDate.format('L');
        dateFormatted = dateFormatted.replaceAll("/","-");
        let r = Math.random().toString(36).substr(2, 9);
        handlePopUp(false);
        // database.ref('company/tables/' + tableIdPicked + "/reservations/" + dateFormatted + "/" + r + "/"
        
        // ).set({
        //     username: currentUser,
        //     first_name: customerFirstName,
        //     last_name: customerLastName,
        //     from: startDate.format(),
        //     to: endDate.format(),
        //     number_of_people: numberOfPeople
        // });
    }

    const sliceMap = (map, start, end) =>{

        let slicedMap = new Map();

        for (let i = start; i <= end; i++){
            slicedMap.set(i, map.get(i))
        }

        return slicedMap;
    }

    return (
        <div className={styles.TablesPage} style={{cursor: hovering}}>
            <div className={styles.Header}>
                <div className={styles.Exit}>
                    <Link to='/booking'>EXIT</Link>
                </div>
                {(startDate) &&
                    <div className={styles.Info}>   
                        <p>{startDate.format('hh:mm a')} - {endDate.format('hh:mm a')} </p>
                        <p>{startDate.format('L')} - {endDate.format('L')}</p>    
                    </div>
                }
            </div>
            <div className={styles.Tables} ref={stageRef}>
                <Stage width={1520} height={800}>
                {
                    tablesIds ?
                    <Layer>
                        <TablesTypeOne
                            ids = {sliceMap(tablesIds, 1, 4)} 
                            handleHovering = {handleHovering}
                            handlePopUp = {handlePopUp}
                            x = {0}
                            startDate = {startDate}
                            endDate = {endDate}
                        />
                        <TablesTypeTwo
                            ids = {sliceMap(tablesIds, 4, 8)} 
                            handleHovering = {handleHovering} 
                            x = {450}
                            handlePopUp = {handlePopUp}
                            startDate = {startDate}
                            endDate = {endDate}
                        />
                        <TablesTypeThree
                            ids = {sliceMap(tablesIds, 8, 11)} 
                            handleHovering = {handleHovering} 
                            x = {740}
                            handlePopUp = {handlePopUp}
                            startDate = {startDate}
                            endDate = {endDate}
                        />
                        <TablesTypeTwo
                            ids = {sliceMap(tablesIds, 11, 15)} 
                            handleHovering = {handleHovering} 
                            x = {950}
                            handlePopUp = {handlePopUp}
                            startDate = {startDate}
                            endDate = {endDate}
                        />
                        <TablesTypeOne
                            ids = {sliceMap(tablesIds, 15, 19)} 
                            handleHovering = {handleHovering}
                            x = {1220 }
                            handlePopUp = {handlePopUp}
                            startDate = {startDate}
                            endDate = {endDate}
                        />
                    </Layer>
                    :
                    null
                }
                </Stage>
                
            </div>
            {   
                openPopUp?
                <>
                    <PopUp 
                        handlePopUp         = {handlePopUp}
                        handleReservation   = {handleReservation}
                        from                = {startDate.format()}
                        to                  = {endDate.format()}
                        first_name          = {customerFirstName}
                        last_name           = {customerLastName}
                    />
                </>
                :
                <div>
                </div>
            }
        </div>
    )
}

export default TablesPage;