import React from 'react';
import Task from './Task.js';
import './css/TaskList.css'

const TaskList = ({tasks, handleTasksChanges}) => {

    return (

        <>
        <div className = "container TaskList">

            <div className="col-12">
                
                {Object.entries(tasks).map( (entry) =>

                    <Task 
                        key={entry[1]['taskId']}
                        taskId = {entry[1]['taskId']} 
                        taskName={entry[1]['taskName']}
                        handleTasksChanges = {handleTasksChanges}
                    />
                )}
            </div>
            
        </div>
        </>
    );
}

export default TaskList;
