import React from 'react';
import './css/DeleteButton.css'

const DeleteButton = ({deleteTask}) => {
    
    return (
    <div className="row DeleteButton">
        <div className="col-12">
            <button onClick ={deleteTask}>DELETE</button>
        </div>
    </div>
    );
}

export default DeleteButton;
