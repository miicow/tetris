import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => (
  //color property access the shape and color property
  <StyledCell type={'L'} color={TETROMINOS['L'].color} />
);
export default Cell;
