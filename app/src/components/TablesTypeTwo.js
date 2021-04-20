import React, {useState} from 'react';
import {Stage, Layer, Line} from 'react-konva'
import '../css/TablesTypeTwo.css'
import TypeTwoTable from './TypeTwoTable'

const TablesTypeTwo = (props) => {

    const xStart = 50;
    const yStart = 52.5;
    const yDistance = 175;
    const tableDistanceFromWalls = 40;
    const width = 100;
    const height = 70;

    return (
        <div>
        <Stage width={window.innerWidth / 5} height={800}>
            <Layer>
                <TypeTwoTable id = {1} x = {xStart + tableDistanceFromWalls} y = {yStart + tableDistanceFromWalls} width = {width} height = {height} color = {'#E04E59'}/>
                <TypeTwoTable id = {2} x = {xStart + tableDistanceFromWalls} y = {(yDistance * 1) + yStart + tableDistanceFromWalls} width = {width} height = {height} color = {'#E04E59'}/>
                <TypeTwoTable id = {3} x = {xStart + tableDistanceFromWalls} y = {(yDistance * 2) + yStart + tableDistanceFromWalls} width = {width} height = {height} color = {'#E04E59'}/>
                <TypeTwoTable id = {4} x = {xStart + tableDistanceFromWalls} y = {(yDistance * 3) + yStart + tableDistanceFromWalls} width = {width} height = {height} color = {'#E04E59'}/>
            </Layer>
      </Stage>
        </div>
    );
}

export default TablesTypeTwo;
