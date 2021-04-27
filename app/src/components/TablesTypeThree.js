import React, {useState}    from 'react';
import {Stage, Layer, Line} from 'react-konva'
import TypeThreeTable       from './TypeThreeTable'
import '../css/TablesTypeTwo.css'

const TablesTypeThree = (props) => {
    
    const x                      = props.x;
    const y                      = 20;
    const yDistance              = 250;
    const tableDistanceFromWalls = 40;
    const width                  = 80;
    const height                 = 120;

    const getTableYDistance = (index) =>{
        return (yDistance * index) + y + tableDistanceFromWalls;
    }

    return (
        <>
            <TypeThreeTable 
                id              = {props.ids[0]}
                x               = {x} 
                y               = {getTableYDistance(0)} 
                width           = {width} 
                height          = {height} 
                handleHovering  = {props.handleHovering}
                handlePopUp     = {props.handlePopUp} 
            />
            <TypeThreeTable 
                id              = {props.ids[1]} 
                x               = {x} 
                y               = {getTableYDistance(1)} 
                width           = {width} 
                height          = {height} 
                handleHovering  = {props.handleHovering}
                handlePopUp     = {props.handlePopUp} 
            />
            <TypeThreeTable 
                id              = {props.ids[2]} 
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
