import React, {useState} from 'react';
import {Rect, Text, Circle, Line} from 'react-konva'

const TypeThreeTable = (props) => {

    const [x, setX] = useState(props.x);
    const [y, setY] = useState(props.y);
    const [width, setWidth] = useState(props.width);
    const [height, setHeight] = useState(props.height);
    const [color, setColor] = useState(props.color);

    return (
        <Rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={color}
        />
    );
}

export default TypeThreeTable;
