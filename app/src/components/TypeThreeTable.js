import React, {useState}            from 'react';
import {Rect, Text, Circle, Line}   from 'react-konva'

const TypeThreeTable = (props) => {

    const id                = props.id;
    const x                 = props.x;
    const y                 = props.y;
    const width             = props.width;
    const height            = props.height;
    const handlePopUp       = props.handlePopUp;
    const handleHovering    = props.handleHovering

    const handleClick = (e) =>{
        props.handlePopUp(true, id);
    }

    const handleHover = (e) =>{
        if(e.type == 'mouseenter'){
            props.handleHovering(true);
        }
        else if(e.type == 'mouseleave'){
            props.handleHovering(false);
        }
    }

    /** RECTANGLES */

    //main table rect
    const tableRectProps = {
        x                   : props.x,
        y                   : props.y,
        width               : props.width,
        height              : props.height,
        fill                : "#CA4751",
    }

    //select table rect
    const selectRectProps = {
        x                   : tableRectProps.x,
        y                   : (tableRectProps.y + tableRectProps.height)    - (tableRectProps.height / 4),
        width               : tableRectProps.width,
        height              : tableRectProps.height / 4,
        fill                : "#51CA47",
        stroke              : "#4E59E0"
    }

    //table seats circle (top and bottom)

     const seatCircleProps = {
        x                   : tableRectProps.x + 42,
        y                   : tableRectProps.y - 23,
        width               : 30,
        height              : 30,
        fill                : "#808080"
    }
    
    const seatCircleProps2 = {
        x                   : tableRectProps.x + 42,
        y                   : tableRectProps.y + 143,
        width               : 30,
        height              : 30,
        fill                : "#808080"
    }
    

    /** TEXTS */
    const textXoffset = 22;
    const textYoffset = 5;
    const numberXoffset = 29;
    const numberYoffset = -57;

    const textSelectProps = {
        text                : "SELECT",
        fontSize            : 10,
        x                   : selectRectProps.x + textXoffset,
        y                   : selectRectProps.y + textYoffset,
        fill                : "#FFF",
        fontFamily          : "'Poppins', sans-serif"
    }

    const textTableProps = {
        text                : "TABLE",
        fontSize            : 10,
        x                   : selectRectProps.x + textXoffset + 2,
        y                   : selectRectProps.y + 12 + textYoffset,
        fill                : "#FFF",
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
            />
            <Rect
                {...selectRectProps}
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
                {...textSelectProps}  
                onClick         = {handleClick} 
                onMouseEnter    = {handleHover} 
                onMouseLeave    = {handleHover}
            />
            <Text 
                {...textTableProps}   
                onClick         = {handleClick} 
                onMouseEnter    = {handleHover} 
                onMouseLeave    = {handleHover}
            />
            <Text
                {...textSeatsProps}
            />
        </>
    );
}

export default TypeThreeTable;
