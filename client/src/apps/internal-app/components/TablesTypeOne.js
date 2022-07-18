import React from 'react';
import {Line} from 'react-konva'
import TypeOneTable from './TypeOneTable'

const TablesTypeOne = (props)               => {

    const x                         = props.x
    const yStart                    = 40;
    const yDistance                 = 175;
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
            <Line
                x               = {x}
                y               = {getLineYDistance(0)}
                points          = {[0, 0, 300, 0]}
                stroke          = '#4E59E0'
                strokeWidth     = {4}
            />
            <TypeOneTable 
                id              = {ids[0]}
                x               = {x + width - (width / 2)}
                y               = {getTableYDistance(0)} 
                width           = {width} 
                height          = {height}
                handleHovering  = {props.handleHovering}
                handlePopUp     = {props.handlePopUp}
            />

            <Line
                x               = {x}
                y               = {getLineYDistance(1)}
                points          = {[0, 0, 300, 0]}
                stroke          = {'#4E59E0'}
                strokeWidth     = {4}
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
            <Line
                x               = {x}
                y               = {getLineYDistance(2)}
                points          = {[0, 0, 300, 0]}
                stroke          = {'#4E59E0'}
                strokeWidth     = {4}
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
            <Line
                x               = {x}
                y               = {getLineYDistance(3)}
                points          = {[0, 0, 300, 0]}
                stroke          = {'#4E59E0'}
                strokeWidth     = {4}
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
            <Line
                x               = {x}
                y               = {getLineYDistance(4)}
                points          = {[0, 0, 300, 0]}
                stroke          = {'#4E59E0'}
                strokeWidth     = {4}
                handleHovering  = {props.handleHovering}
            />
        </>
    );
}

export default TablesTypeOne;
