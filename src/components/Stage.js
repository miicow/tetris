import React from 'react';
import Cell from './Cell';

const Stage = ({ stage }) => (
  <div>
    {/* 
    map through the array created by the helper func
    then map through the arrays in the row
    within the row, create cell component with x and first element defined in the helper function
    */}
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </div>
);

export default Stage;
