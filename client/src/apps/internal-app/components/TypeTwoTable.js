import React from 'react';
import {Rect, Text, Circle}   from 'react-konva'

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
        !booked && handlePopUp(true, id);
    }

    const handleHover = (e) =>{
        if(e.type === 'mouseenter'){
            booked? handleHovering('not-allowed') : handleHovering('pointer')
        }
        else if(e.type === 'mouseleave'){
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
        x                   : (tableRectProps.x + tableRectProps.width)     - (tableRectProps.width     / 3),
        y                   : (tableRectProps.y + tableRectProps.height)    - (tableRectProps.height    / 2),
        width               : tableRectProps.width  / 3,
        height              : tableRectProps.height / 2,
        fill                : booked? "rgb(81, 202, 81, .2)" : "#51CA47",
        stroke              : booked? "rgb(78, 89, 224, .2)" : "#4E59E0"
    }

    //table seats circle (top and bottom)
    const seatCircleProps = {
        x                   : tableRectProps.x + 70,
        y                   : tableRectProps.y - 20,
        width               : 30,
        height              : 30,
        fill                : booked? "rgb(22, 31, 33, 0.2)" : "rgb(22, 31, 33, 0.5)",
    } //top
    
    const seatCircleProps2 = {
        x                   : tableRectProps.x + 160,
        y                   : tableRectProps.y + 38,
        width               : 30,
        height              : 30,
        fill                : booked? "rgb(22, 31, 33, 0.2)" : "rgb(22, 31, 33, 0.5)",
    } //right

    const seatCircleProps3 = {
        x                   : tableRectProps.x - 20 ,
        y                   : tableRectProps.y + 38,
        width               : 30,
        height              : 30,
        fill                : booked? "rgb(22, 31, 33, 0.2)" : "rgb(22, 31, 33, 0.5)",
    }   //left
    
    const seatCircleProps4 = {
        x                   : tableRectProps.x + 70,
        y                   : tableRectProps.y + 90,
        width               : 30,
        height              : 30,
        fill                : booked? "rgb(22, 31, 33, 0.2)" : "rgb(22, 31, 33, 0.5)",
    } //bottom

    /** TEXTS */
    const numberXoffset = -35;
    const numberYoffset = -15;

    const textSeatsProps = {
        text                : "4",
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
            <Circle
                {...seatCircleProps3}
            />
            <Circle
                {...seatCircleProps4}
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

export default TypeTwoTable;
