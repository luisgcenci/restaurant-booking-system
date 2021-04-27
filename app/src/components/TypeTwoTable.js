import React, {useState}            from 'react';
import {Rect, Text, Circle, Line}   from 'react-konva'

const TypeTwoTable = (props) => {

    const id                = props.id;
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
        fill                : "#CA4751",
    }

    //select table rect
    const selectRectProps = {
        x                   : (tableRectProps.x + tableRectProps.width)     - (tableRectProps.width     / 3),
        y                   : (tableRectProps.y + tableRectProps.height)    - (tableRectProps.height    / 2),
        width               : tableRectProps.width  / 3,
        height              : tableRectProps.height / 2,
        fill                : "#51CA47",
        stroke              : "#4E59E0",
    }

    /** TEXTS */
    const textXoffset = 7;
    const textYoffset = 8;

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
