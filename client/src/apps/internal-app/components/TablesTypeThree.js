import React from 'react';
import TypeThreeTable from './TypeThreeTable'

const TablesTypeThree = (props) => {
    
    const x                      = props.x;
    const y                      = 50;
    const yDistance              = 275;
    const tableDistanceFromWalls = 40;
    const width                  = 80;
    const height                 = 120;
    const ids                       = Array.from(props.ids);

    const getTableYDistance = (index) =>{
        return (yDistance * index) + y + tableDistanceFromWalls;
    }
    
    return (
        <>
            <TypeThreeTable 
                id              = {ids[0]}
                x               = {x} 
                y               = {getTableYDistance(0)} 
                width           = {width} 
                height          = {height} 
                handleHovering  = {props.handleHovering}
                handlePopUp     = {props.handlePopUp} 
            />
            <TypeThreeTable 
                id              = {ids[1]} 
                x               = {x} 
                y               = {getTableYDistance(1)} 
                width           = {width} 
                height          = {height} 
                handleHovering  = {props.handleHovering}
                handlePopUp     = {props.handlePopUp} 
            />
            <TypeThreeTable 
                id              = {ids[2]} 
                x               = {x} 
                y               = {getTableYDistance(2)} 
                width           = {width} 
                height          = {height} 
                handleHovering  = {props.handleHovering}
                handlePopUp     = {props.handlePopUp} 
            />
        </>
    );
}

export default TablesTypeThree;
