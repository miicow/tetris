import React from 'react';
import Cell from './Cell';
import { StyledArea } from './styles/StyledArea';

const GameArea = ({ area }) => (
  <StyledArea width={area[0].length} height={area.length}>
    {/* 
    map through the array created by the helper func
    then map through the arrays in the row
    within the row, create cell component with x and first element defined in the helper function
    */}
    {area.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledArea>
);

export default GameArea;
