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

  const rotate = (maxtrix, direction) => {
    //make rows to become columns (transpose)
    const rotatedTetromino = maxtrix.map((_, index) =>
      maxtrix.map(column => column[index])
    );
    //reverse each row to get rotated matrix or tetromino in this case
    if (direction > 0) return rotatedTetromino.map(row => row.reverse());
    return rotatedTetromino.reverse();
  };

  const playerRotate = (area, direction) => {
    //never mutate state - create a clone
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, direction);

    setPlayer(clonedPlayer);
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      position: { x: AREA_WIDTH / 2 - 2, y: 0 },
      tetromino: generateRandomTetrominos().shape,
      collide: false
    });
  }, []);

  //returning the player before we needed to import this custom hook later
  return [player, updatePlayerPosition, resetPlayer, playerRotate];
};
