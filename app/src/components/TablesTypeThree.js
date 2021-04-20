import React, {useState} from 'react';
import {Stage, Layer, Line} from 'react-konva'
import '../css/TablesTypeTwo.css'
import TypeThreeTable from './TypeThreeTable'

const TablesTypeThree = (props) => {

    const xStart = 50;
    const yStart = 20;
    const yDistance = 250;
    const tableDistanceFromWalls = 40;
    const width = 80;
    const height = 120;

    return (
        <div>
        <Stage width={window.innerWidth / 5} height={800}>
            <Layer>
                <TypeThreeTable id = {1} x = {xStart + tableDistanceFromWalls} y = {yStart + tableDistanceFromWalls} width = {width} height = {height} color = {'#E04E59'}/>
                <TypeThreeTable id = {2} x = {xStart + tableDistanceFromWalls} y = {(yDistance * 1) + yStart + tableDistanceFromWalls} width = {width} height = {height} color = {'#E04E59'}/>
                <TypeThreeTable id = {3} x = {xStart + tableDistanceFromWalls} y = {(yDistance * 2) + yStart + tableDistanceFromWalls} width = {width} height = {height} color = {'#E04E59'}/>
            </Layer>
      </Stage>
        </div>
    );
}

export default TablesTypeThree;
