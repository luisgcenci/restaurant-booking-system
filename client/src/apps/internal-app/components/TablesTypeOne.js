import React from 'react';
import {Line} from 'react-konva'
import TypeOneTable from './TypeOneTable'

const TablesTypeOne = (props)               => {

    const x                         = props.x
    const yStart                    = 50;
    const yDistance                 = 200;
    const tableDistanceFromWalls    = 40;
    const width                     = 160;
    const height                    = 95;
    const ids                       = Array.from(props.ids);


    const getLineYDistance = (index)        =>{
        return (yDistance * index) + yStart;
    }

    const getTableYDistance = (index)       =>{
        return (yDistance * index) + yStart + tableDistanceFromWalls
    }

    return (
        <>
            <TypeOneTable 
                id              = {ids[0]}
                x               = {x + width - (width / 2)}
                y               = {getTableYDistance(0)} 
                width           = {width} 
                height          = {height}
                handleHovering  = {props.handleHovering}
                handlePopUp     = {props.handlePopUp}
            />
            <TypeOneTable 
                id              = {ids[1]} 
                x               = {x + width - (width / 2)}
                y               = {getTableYDistance(1)} 
                width           = {width} 
                height          = {height}
                handleHovering  = {props.handleHovering}    
                handlePopUp     = {props.handlePopUp}
            />
            <TypeOneTable 
                id              = {ids[2]} 
                x               = {x + width - (width / 2)}
                y               = {getTableYDistance(2)} 
                width           = {width} 
                height          = {height}
                handleHovering  = {props.handleHovering}
                handlePopUp     = {props.handlePopUp}
            />
            <TypeOneTable 
                id              = {ids[3]} 
                x               = {x + width - (width / 2)}
                y               = {getTableYDistance(3)} 
                width           = {width} 
                height          = {height}
                handleHovering  = {props.handleHovering}
                handlePopUp     = {props.handlePopUp}
            />
        </>
    );
}

export default TablesTypeOne;
