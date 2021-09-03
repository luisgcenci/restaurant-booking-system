import React, {useState} from 'react'
import axios from 'axios';
import './css/CreateTask.css'

const CreateTask = ({handleTasksChanges}) => {

    const [taskText, setTaskText] = useState("");
    
    const createTask = () =>{

        axios.post('/createTask', {

            taskName: taskText
        }).then(response =>{
            
        setTaskText("");
        handleTasksChanges();
        });
    }

    const handleTextChange = (event) =>{

        setTaskText(event.target.value);
    }

    return (
        <div className = "container CreateTask">
            <div className="row">
                <div className="col-12 CreateTaskInputDiv">
                    
                    <button onClick ={createTask}>+</button>
                    <input type="text" value={taskText} onChange={handleTextChange}/>
                </div>
            </div>
        </div>
    )
}

export default CreateTask;