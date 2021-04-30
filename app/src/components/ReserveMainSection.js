import React,{useState, useEffect}  from 'react';
import {Link}                       from "react-router-dom";
import firebase                     from './Firebase.js';
import DatePicker                   from 'react-datepicker';
import Select                       from 'react-select';
import ClipLoader                   from "react-spinners/ClipLoader";
import moment                       from 'moment';
import "firebase/auth";
import "firebase/database";
import '../css/ReserveMainSection.css';
import 'react-datepicker/dist/react-datepicker.css';

const ReserveMainSection = ({currentUser}) => {

    const [datePicked       , setDatePicked]        = useState(moment());
    const [startTime        , setStartTime]         = useState(undefined);
    const [endTime          , setEndTime]           = useState(undefined);
    const [startTimeOptions , setStartTimeOptions]  = useState(undefined);
    const [endTimeOptions   , setEndTimeOptions]    = useState(undefined);
    const [customerFirstName, setCustomerFirstName] = useState("");
    const [customerLastName , setCustomerLastName]  = useState("");
    const [numberOfPeople   , setNumberOfPeople]    = useState(1);
    const [startDate        , setStartDate]         = useState(undefined);
    const [endDate          , setEndDate]           = useState(undefined);

    const handleSelectChange = (e, select)      => {
        select == "from" ?
            setStartTime(e) :
            setEndTime(e)
    }

    const handleDateChange  = (date)    =>{
        setDatePicked(moment(date));
    }

    useEffect( () =>{
        const setUpTimeInfo = () =>{

            const daysOfWeekAsString    = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    
            var starCountRef            = firebase.database().ref('/company/operation/');
            var data                    = undefined;
            let startTimeOptions        = [];
            let endTimeOptions          = [];
    
            starCountRef.on('value', (snapshot) => {
                data = snapshot.val();
                
                Object.keys(data).map( d => {
                    
                    if (d.toString() === daysOfWeekAsString[datePicked.day()]){
                        
                        let openTime        = data[d]['start_time']
                        openTime            = openTime.replace(/[^0-9,:]+/g, "");
                        openTime            = openTime.split(':');
                        let openHours       = parseInt(openTime[0]);
                        let openMinutes     = parseInt(openTime[1]);
    
                        let closeTime       = data[d]['close_time'];
                        let nextDay         = closeTime.includes('nd') ? true : false;
                        closeTime           = closeTime.replace(/[^0-9,:]+/g, "");
                        closeTime           = closeTime.split(':');
                        let closeHours      = parseInt(closeTime[0]);
                        let closeMinutes    = parseInt(closeTime[1]);
                        
                        let openDate        = moment(datePicked).hours(openHours).minutes(openMinutes).seconds(0).milliseconds(0);
                        let closeDate       = nextDay ? 
                            moment(datePicked).add(1, 'd').hours(closeHours).minutes(closeMinutes).seconds(0).milliseconds(0) :
                            moment(datePicked).hours(closeHours).minutes(closeMinutes).seconds(0).milliseconds(0);
                        
                        let nowDate         = moment();
                        nowDate.minutes() <= 30 ? 
                            nowDate.minutes(30).seconds(0).milliseconds(0) : 
                            nowDate.add(1, 'h').minutes(0).seconds(0).milliseconds(0);
    
                        nowDate > openDate && (openDate = nowDate);
    
                        const oldOpenDateDay = openDate.day();
    
                        while (openDate <= closeDate){
    
                            let nextDay = "";
                            openDate.day() != oldOpenDateDay && (nextDay = " (" + "next day" + ") ");
    
                            startTimeOptions.push({
                                value       : openDate.format('h:mm a') + nextDay,
                                label       : openDate.format('h:mm a') + nextDay,
                                isDisabled  : false
                            })
                            endTimeOptions.push({
                                value       : openDate.format('h:mm a') + nextDay,
                                label       : openDate.format('h:mm a') + nextDay,
                                isDisabled  : false
                            })
                            
                            openDate.add('m', 30);
                        }
                        
                    }
    
                    return 0;
                });

                startTimeOptions[startTimeOptions.length - 1].isDisabled = true;
                startTimeOptions[startTimeOptions.length - 2].isDisabled = true;
                setStartTime        (startTimeOptions[0]);
                setEndTime          (endTimeOptions[2]);
                setStartTimeOptions (startTimeOptions);
                setEndTimeOptions   (endTimeOptions.slice(2));
            });
            
            return data;
        }

        setUpTimeInfo();
    }, [datePicked])

    useEffect( () =>{

        const getDate = (t) =>{

            let time            = t.value
            let pm              = time.includes("pm")       ? true : false;
            let nextDay         = time.includes("next day") ? true : false;
            time                = time.replace(/[^0-9,:]+/g, "");
            time                = time.split(':');
            let hour            = pm? parseInt(time[0]) + 12 : parseInt(time[0]);
            hour                = hour == 24? 12 : hour;
            hour                == 12 && !pm && (hour = 0);
            let minutes         = time[1];
            let date = moment(datePicked).hours(hour).minutes(minutes).seconds(0).milliseconds(0);
            nextDay && date.add(1, 'd');
            
            return date;
        }

        if (startTime && endTime){

            let sd = getDate(startTime);
            let ed = getDate(endTime);
            
            setStartDate(sd);
            setEndDate(ed);
        }

        if (endTimeOptions){
            
            const filter = (option) =>{
                option = getDate(option) > getDate(startTime).add(30, 'm')
                ? option.isDisabled = false
                : option.isDisabled = true
            }
            endTimeOptions.filter(filter);
        }
        
    }, [startTime, endTime])

    return (
        startTime && endTime?
        <div className="container MainSection">
            <div className="row">
                <div className="col-12">
                <h4 id="titles">RESERVATION INFORMATION</h4>
                </div>
                <div className="col-md-4 col-12">
                    <h4 id="titles">PICK A DATE</h4>
                    <DatePicker
                        selected        = {datePicked.toDate()}
                        onChange        = {handleDateChange}
                        minDate         = {moment().toDate()}
                    />
                </div>
                <div className="col-md-4 col-12">
                    <h4 id="titles">FROM TIME</h4>
                    <Select 
                        options             = {startTimeOptions}
                        value               = {startTime}
                        onChange            = {(e) => handleSelectChange(e, "from")}
                        name                = "color"
                    />
                </div>
                <div className="col-md-4 col-12">
                    <h4 id="titles">TO TIME</h4>
                    <Select 
                        options         = {endTimeOptions}
                        onChange        = {(e) => handleSelectChange(e, "to")}
                        name            = "color"
                    />
                </div>
                <div className="col-md-4 col-12">
                    <h4 id="titles">FIRST NAME</h4>
                    <input 
                        type        = "text" 
                        value       = {customerFirstName} 
                        onChange    = {(e) => setCustomerFirstName(e.target.value)} 
                        placeholder = "Enter First Name"
                    />
                </div>
                <div className="col-md-4 col-12">
                    <h4 id="titles">LAST NAME</h4>
                    <input 
                        type        = "text" 
                        value       = {customerLastName} 
                        onChange    = {(e) => setCustomerLastName(e.target.value)} 
                        placeholder = "Enter Last Name"
                    />
                </div>
                <div className="col-md-4 col-12">
                    <h4 id="titles">HOW MANY PEOPLE?</h4>
                    <input 
                        type        = "number" 
                        value       = {numberOfPeople}
                        onChange    = {(e) => {
                            if (e.target.value > 8 || e.target.value < 1) {
                                e.target.value = 1;
                            } 
                            setNumberOfPeople(e.target.value)
                        }}
                        placeholder="Enter Quantity of People"
                        min = "1"
                        max = "8"
                    />
                </div>
                <div className="col-12">
                    {datePicked && startDate && endDate &&
                    <Link to={{
                        pathname: "/tableview",
                        state:{
                            datePicked      : datePicked.toDate(),
                            startDate       : startDate.format(),
                            endDate         : endDate.format(),
                            customerFName   : customerFirstName,
                            customerLName   : customerLastName,
                            numberOfPeople  : numberOfPeople,
                            currentUser     : currentUser
                        }   
                    }}>
                    <button id ="defaultButton">SEE TABLES</button></Link>
                    }
                </div>
            </div>
        </div>
        :
        <div className="container MainSection">
            <div className="row justify-content-center">
                <div className="col-12 loader">
                    <ClipLoader 
                        color={"#000000"} 
                        loading={true} 
                        css={"text-align:center"} 
                        size={400} 
                    />
                </div>
            </div>
        </div>
    )
}

export default ReserveMainSection;