import React, {useState, useEffect} from 'react'
import TaskList from './TaskList';
import CreateTask from './CreateTask';
import axios from 'axios';

const ToDoList = () => {

    const [tasks, setTasks] = useState("");

    const handleTasksChanges = () =>{

        axios.get('/getAllTasks').then( (response) =>{
    
          var tasks = response.data;
          setTasks(tasks);
        })
    }

    useEffect(() =>{

        axios.get('/getAllTasks').then( response =>{
    
          var tasks = response.data;
          setTasks(tasks);
        });

    }, []);

    return (
        <>
        <TaskList handleTasksChanges ={handleTasksChanges} tasks = {tasks}></TaskList>
        <CreateTask handleTasksChanges ={handleTasksChanges}></CreateTask>
        </>
    )
}

export default ToDoList;