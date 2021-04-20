import React, {useState} from 'react';
import {Rect, Text, Circle, Line} from 'react-konva'

const TypeOneTable = (props) => {

    const [id, setId] = useState(props.id);
    const [canvasWidth, setX] = useState(props.canvasWidth);
    const [y, setY] = useState(props.y);
    const [width, setWidth] = useState(props.width);
    const [height, setHeight] = useState(props.height);
    const [color, setColor] = useState(props.color);

    return (
        <Rect
        x={(canvasWidth / 2) - (width / 2)}
        y={y}
        width={width}
        height={height}
        fill={color}
        />
    );
}

export default TypeOneTable;
