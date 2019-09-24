import { useState } from 'react';
import { generateRandomTetrominos } from '../tetrominos';

export const usePlayer = () => {
  //player is the state, and setPlayer is the setter for the player state
  //passing parameter into useState sets the initial state
  const [player, setPlayer] = useState({
    position: { x: 0, y: 0 },
    tetromino: generateRandomTetrominos().shape,
    collide: false
  });

  //returning the player before we needed to import this custom hook later
  return [player];
};
