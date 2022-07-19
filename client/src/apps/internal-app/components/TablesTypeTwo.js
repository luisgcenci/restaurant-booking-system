import React from 'react';
import TypeTwoTable from './TypeTwoTable'

const TablesTypeTwo = (props) => {

    const x                         = props.x;
    const y                         = 50;
    const yDistance                 = 200;
    const tableDistanceFromWalls    = 40;
    const width                     = 140;
    const height                    = 70;
    const ids                       = Array.from(props.ids);

    const getTableYDistance = (index) =>{
        return (yDistance * index) + y + tableDistanceFromWalls
    }

    return (
        <>
            <TypeTwoTable 
                id                  = {ids[0]} 
                x                   = {x} 
                y                   = {getTableYDistance(0)} 
                width               = {width} 
                height              = {height} 
                handleHovering      = {props.handleHovering}  
                handlePopUp         = {props.handlePopUp}  
            />
            <TypeTwoTable 
                id                  = {ids[1]} 
                x                   = {x} 
                y                   = {getTableYDistance(1)} 
                width               = {width} 
                height              = {height} 
                handleHovering      = {props.handleHovering}
                handlePopUp         = {props.handlePopUp} 
            />
            <TypeTwoTable 
                id                  = {ids[2]} 
                x                   = {x} 
                y                   = {getTableYDistance(2)} 
                width               = {width} 
                height              = {height} 
                handleHovering      = {props.handleHovering}
                handlePopUp         = {props.handlePopUp} 
            />
            <TypeTwoTable 
                id                  = {ids[3]} 
                x                   = {x} 
                y                   = {getTableYDistance(3)} 
                width               = {width} 
                height              = {height} 
                handleHovering      = {props.handleHovering}
                handlePopUp         = {props.handlePopUp} 
            />
        </>
    );
}

export default TablesTypeTwo;
