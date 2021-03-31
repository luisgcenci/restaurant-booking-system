import React,{useState, useEffect} from 'react';
import fireb from './Firebase.js';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import ClipLoader from "react-spinners/ClipLoader";
import '../css/ReserveMainSection.css';
import 'react-datepicker/dist/react-datepicker.css';

const ReserveMainSection = () => {

    const [datePicked, setDatePicket] = useState(new Date());
    const [startTimeDefault, setStartTimeDefault] = useState(undefined);
    const [endTimeDefault, setEndTimeDefault] = useState(undefined);
    const [timeOptions, setTimeOptions] = useState(undefined);
    const [customerFirstName, setCustomerFirstName] = useState("");
    const [customerLastName, setCustomerLastName] = useState("");
    const [numberOfPeople, setNumberOfPeople] = useState(1);

    const setUpTimeInfo = () =>{
        var startHours = new Date().getHours();
        var startMinutes = new Date().getMinutes();
        startHours = startMinutes <= 30 ? startHours : startHours += 1;
        startMinutes = startMinutes <= 30 ? .5 : 0;
        var startTime = startHours + startMinutes;

        const daysOfWeekAsString = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        var dayOfWeek = new Date().getDay();
        dayOfWeek = daysOfWeekAsString[dayOfWeek];

        var starCountRef = fireb.database().ref('/company/operation/');
        var data = undefined;
        var options = [];

        starCountRef.on('value', (snapshot) => {
            data = snapshot.val();

            Object.keys(data).map( d => {
            
                if (d.toString() === dayOfWeek){
                    var closeTime = data[d]['close_time'];
                    closeTime = closeTime.replace(/[^0-9,:]+/g, "");
                    closeTime = closeTime.split(':');
                    var closeHours = parseInt(closeTime[0]);
                    var closeMinutes = parseInt(closeTime[1]);
                    closeMinutes = closeMinutes > 0? 0.5: 0;
                    closeTime = closeHours + closeMinutes;
                    var timeBetween = (closeTime) - (startTime);
                    timeBetween = timeBetween < 0? timeBetween + 24:timeBetween;

                    for (var i = startTime; i <= (startTime + timeBetween) - 1; i+=0.5){
                        var optionHour = Math.floor(i % 12);
                        var ampm = (i >= 12 && i < 24)? 'PM' : 'AM';
                        var optionMinutes = (i % 12) - optionHour;
                        optionHour = optionHour === 0? 12: optionHour;
                        if (optionMinutes === 0){
                            optionMinutes = '00';
                            options.push({
                                value:optionHour + ":" + optionMinutes + " " + ampm,
                                label:optionHour + ":" + optionMinutes + " " + ampm
                            });
                        }else{
                            options.push({
                                value:optionHour + ":" + optionMinutes * 60 + " " + ampm,
                                label:optionHour + ":" + optionMinutes * 60 + " " + ampm}
                            );
                        }            
                    }
                    
                }
    
            });
        
            setStartTimeDefault(options[0]);
            setEndTimeDefault(options[2]);
            setTimeOptions(options);
        });
        
        return data;
    }

    useEffect( () =>{

        setUpTimeInfo();
    }, [])

    const database = fireb.database();

    return (
        startTimeDefault && endTimeDefault && timeOptions?
        <div className="container MainSection">
            <div className="row">
                <div className="col-12">
                <h4 id="titles">RESERVATION INFORMATION</h4>
                </div>
                <div className="col-md-4 col-12">
                    <h4 id="titles">PICK A DATE</h4>
                    <DatePicker
                    selected={datePicked}
                    onChange={date => setDatePicket(date)}
                    minDate={new Date()}
                    />
                </div>
                <div className="col-md-4 col-12">
                    <h4 id="titles">FROM TIME</h4>
                    <Select 
                    options = {timeOptions}
                    defaultValue={startTimeDefault}
                    name="color"
                    />
                </div>
                <div className="col-md-4 col-12">
                    <h4 id="titles">TO TIME</h4>
                    <Select 
                    options = {timeOptions}
                    defaultValue={endTimeDefault}
                    name="color"
                    />
                </div>
                <div className="col-md-4 col-12">
                    <h4 id="titles">FIRST NAME</h4>
                    <input 
                        type="text" 
                        value={customerFirstName} 
                        onChange={(e) => setCustomerFirstName(e.target.value)} 
                        placeholder="Enter First Name"
                    />
                </div>
                <div className="col-md-4 col-12">
                    <h4 id="titles">LAST NAME</h4>
                    <input 
                        type="text" 
                        value={customerLastName} 
                        onChange={(e) => setCustomerLastName(e.target.value)} 
                        placeholder="Enter Last Name"
                    />
                </div>
                <div className="col-md-4 col-12">
                    <h4 id="titles">HOW MANY PEOPLE?</h4>
                    <input 
                        type="number" 
                        value={numberOfPeople}
                        onChange={(e) => {
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
                    <button id ="defaultButton">SEE TABLES</button>
                </div>
            </div>
        </div>
        :
        <div className="container MainSection">
            <div className="row justify-content-center">
                <div className="col-12 loader">
                    <ClipLoader color={"#000000"} loading={true} css={"text-align:center"} size={400} /> 
                </div>
            </div>
        </div>
    )
}

export default ReserveMainSection;