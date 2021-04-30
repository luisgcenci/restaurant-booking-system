import React, {useState}            from 'react';
import {Rect, Text, Circle, Line}   from 'react-konva'

const TypeTwoTable = (props) => {

    const id                = props.id[0];
    const booked            = props.id[1];
    const x                 = props.x;
    const y                 = props.y;
    const width             = props.width;
    const height            = props.height;
    const handlePopUp       = props.handlePopUp;
    const handleHovering    = props.handleHovering

    const handleClick = (e) =>{
        handlePopUp(true, id);
    }

    const handleHover = (e) =>{
        if(e.type == 'mouseenter'){
            handleHovering(true);
        }
        else if(e.type == 'mouseleave'){
            handleHovering(false);
        }
    }

    /** RECTANGLES */

    //main table rect
    const tableRectProps = {
        x                   : x,
        y                   : y,
        width               : width,
        height              : height,
        fill                : booked? "rgb(202, 71, 81, .2)" : "#CA4751"
    }

    //select table rect
    const selectRectProps = {
        x                   : (tableRectProps.x + tableRectProps.width)     - (tableRectProps.width     / 3),
        y                   : (tableRectProps.y + tableRectProps.height)    - (tableRectProps.height    / 2),
        width               : tableRectProps.width  / 3,
        height              : tableRectProps.height / 2,
        fill                : booked? "rgb(81, 202, 81, .2)" : "#51CA47",
        stroke              : booked? "rgb(78, 89, 224, .2)" : "#4E59E0"
    }

    /** TEXTS */
    const textXoffset = 7;
    const textYoffset = 8;

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
        </>
    );
}

export default TypeTwoTable;
