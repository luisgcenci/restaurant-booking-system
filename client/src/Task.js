import React, {useState} from 'react'
import DeleteButton from './DeleteButton'
import './css/Task.css'
import axios from 'axios';

export default function Task({taskId, taskName, handleTasksChanges}) {

    const [id] = useState(taskId);
    const [name] = useState(taskName);

    const deleteTask = () => {

        axios.delete('/deleteTask', {
            data : {
                taskId: id
            }
        }).then( response =>{
            handleTasksChanges();
        })
    }

    return (

        <div className="container Task">
            <div className="row">
                <div className="col-9 Task-text">
                    {name}
                </div>
                <div className="col-3 Task-delete-button">
                    <DeleteButton deleteTask={deleteTask}></DeleteButton>
                </div>
            </div>
        </div>
    )
}
