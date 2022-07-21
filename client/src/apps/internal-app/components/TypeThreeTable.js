import React from 'react';
import {Rect, Text, Circle}   from 'react-konva'

const TypeThreeTable = (props) => {

    const id                = props.id[0];
    const booked            = props.id[1];
    const x                 = props.x;
    const y                 = props.y;
    const width             = props.width;
    const height            = props.height;
    const handlePopUp       = props.handlePopUp;
    const handleHovering    = props.handleHovering

    const handleClick = (e) =>{
        !booked && handlePopUp(true, id);
    }

    const handleHover = (e) =>{
        if(e.type           === 'mouseenter'){
            booked? handleHovering('not-allowed') : handleHovering('pointer')
        }
        else if(e.type      === 'mouseleave'){
            handleHovering('default');
        }
    }

    /** RECTANGLES */

    //main table rect
    const tableRectProps = {
        x                   : x,
        y                   : y,
        width               : width,
        height              : height,
        fill                : booked? "rgb(164, 54, 4, .2)" : "#a43604",
        shadowColor         : 'black',
        shadowOffsetX       : 2,
        shadowOffsetY       : 2,
        shadowOpacity       : 0.5,
        shadowBlur          : 4
    }

    //select table rect
    const selectRectProps = {
        x                   : tableRectProps.x,
        y                   : (tableRectProps.y + tableRectProps.height)    - (tableRectProps.height / 4),
        width               : tableRectProps.width,
        height              : tableRectProps.height / 4,
        fill                : booked? "rgb(81, 202, 81, .2)" : "#51CA47",
        stroke              : booked? "rgb(78, 89, 224, .2)" : "#4E59E0"
    }

    //table seats circle (top and bottom)

     const seatCircleProps = {
        x                   : tableRectProps.x + 42,
        y                   : tableRectProps.y - 23,
        width               : 30,
        height              : 30,
        fill                : booked? "rgb(22, 31, 33, 0.2)" : "rgb(22, 31, 33, 0.5)",
    }
    
    const seatCircleProps2 = {
        x                   : tableRectProps.x + 42,
        y                   : tableRectProps.y + 143,
        width               : 30,
        height              : 30,
        fill                : booked? "rgb(22, 31, 33, 0.2)" : "rgb(22, 31, 33, 0.5)",
    }
    

    /** TEXTS */
    const textXoffset = 22;
    const textYoffset = 5;
    const numberXoffset = 30;
    const numberYoffset = -50;

    const textSelectProps = {
        text                : "SELECT",
        fontSize            : 10,
        x                   : selectRectProps.x + textXoffset,
        y                   : selectRectProps.y + textYoffset,
        fill                : booked? "rgb(255, 255, 255, .2)" : "#FFF",
        fontFamily          : "'Poppins', sans-serif"
    }

    const textTableProps = {
        text                : "TABLE",
        fontSize            : 10,
        x                   : selectRectProps.x + textXoffset + 2,
        y                   : selectRectProps.y + 12 + textYoffset,
        fill                : booked? "rgb(255, 255, 255, .2)" : "#FFF",
        fontFamily          : "'Poppins', sans-serif"
    }       

    const textSeatsProps = {
        text                : "2",
        fontSize            : 40,
        x                   : selectRectProps.x + numberXoffset,
        y                   : selectRectProps.y + numberYoffset,
        fill                : "#FFF",
        fontFamily          : "'Poppins', sans-serif"
    }

    return (
        <>
            <Rect 
                {...tableRectProps}
                onClick         = {handleClick} 
                onMouseEnter    = {handleHover} 
                onMouseLeave    = {handleHover}
            />
            <Circle
                {...seatCircleProps}
            />
            <Circle
                {...seatCircleProps2}
            />
            <Text
                {...textSeatsProps}
                onClick         = {handleClick} 
                onMouseEnter    = {handleHover} 
                onMouseLeave    = {handleHover}
            />
        </>
    );
}

export default TypeThreeTable;
