import React, {useState} from 'react';
import {Stage, Layer, Line} from 'react-konva'
import '../css/TablesTypeOne.css'
import TypeOneTable from './TypeOneTable'

const TablesTypeOne = (props) => {

    const xStart = 0;
    const yStart = 40;
    const yDistance = 175;
    const tableDistanceFromWalls = 40;
    const width = 160;
    const height = 95;
    const canvasWidth = window.innerWidth / 5;

    return (
        <Stage width={canvasWidth} height={800}>
            <Layer>                
                <Line
                x = {xStart}
                y = {yStart}
                points = {[0, 0, canvasWidth, 0]}
                stroke = '#4E59E0'
                strokeWidth = '4'
                />
                <TypeOneTable id = {1} canvasWidth = {canvasWidth} y = {yStart + tableDistanceFromWalls} width = {width} height = {height} color = {'#E04E59'}/>

                <Line
                x = {xStart}
                y = {(yDistance * 1) + yStart}
                points = {[0, 0, canvasWidth, 0]}
                stroke = {'#4E59E0'}
                strokeWidth = '4'
                />
                
                <TypeOneTable id = {2} canvasWidth = {canvasWidth} y = {(yDistance * 1) + yStart + tableDistanceFromWalls} width = {width} height = {height} color = {'#E04E59'}/>
                <Line
                x = {xStart}
                y = {(yDistance * 2) + yStart}
                points = {[0, 0, canvasWidth, 0]}
                stroke = {'#4E59E0'}
                strokeWidth = '4'
                />
                <TypeOneTable id = {3} canvasWidth = {canvasWidth} y = {(yDistance * 2) + yStart + tableDistanceFromWalls} width = {width} height = {height} color = {'#E04E59'}/>
                <Line
                x = {xStart}
                y = {(yDistance * 3) + yStart}
                points = {[0, 0, canvasWidth, 0]}
                stroke = {'#4E59E0'}
                strokeWidth = '4'
                />
                <TypeOneTable id = {4} canvasWidth = {canvasWidth} y = {(yDistance * 3) + yStart + tableDistanceFromWalls} width = {width} height = {height} color = {'#E04E59'}/>
                <Line
                x = {xStart}
                y = {(yDistance * 4) + yStart}
                points = {[0, 0, canvasWidth, 0]}
                stroke = {'#4E59E0'}
                strokeWidth = '4'
                />
            </Layer>
      </Stage>
    );
}

export default TablesTypeOne;



{/* <Text text="Some text on canvas" fontSize={15} />

<Circle x={200} y={100} radius={50} fill="green" /> */}
