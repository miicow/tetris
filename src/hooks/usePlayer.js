import { useState, useCallback } from 'react';
import { generateRandomTetrominos, TETROMINOS } from '../tetrominos';
import { AREA_WIDTH } from '../Helpers';

export const usePlayer = () => {
  //player is the state, and setPlayer is the setter for the player state
  //passing parameter into useState sets the initial state
  const [player, setPlayer] = useState({
    position: { x: 0, y: 0 },
    //the initial tetromino on page is the empty shape
    tetromino: TETROMINOS[0].shape,
    collide: false
  });

  const updatePlayerPosition = ({ x, y, collide }) => {
    //calling custom hook setPlayer because of movement
    setPlayer(previousState => ({
      ...previousState,
      position: {
        x: (previousState.position.x += x),
        y: (previousState.position.y += y)
      },
      collide
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      position: { x: AREA_WIDTH / 2 - 2, y: 0 },
      tetromino: generateRandomTetrominos().shape,
      collide: false
    });
  }, []);

  //returning the player before we needed to import this custom hook later
  return [player, updatePlayerPosition, resetPlayer];
};
