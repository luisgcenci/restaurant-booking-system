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

    /** TEXTS */
    const textXoffset = 22;
    const textYoffset = 5;

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

export default TypeThreeTable;
