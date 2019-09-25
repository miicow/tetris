import { useState, useEffect } from 'react';
import { createGameArea } from '../Helpers';

export const useGameArea = (player, resetPlayer) => {
  const [gameArea, setGameArea] = useState(createGameArea());

  useEffect(() => {
    const updateArea = previousArea => {
      //first flush the state
      const newStage = previousArea.map(row =>
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      );

      //drawing the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.position.y][x + player.position.x] = [
              value,
              `${player.collide ? 'merge' : 'clear'}`
            ];
          }
        });
      });

      //check if we collided
      if (player.collide) {
        resetPlayer();
      }

      return newStage;
    };

    setGameArea(previous => updateArea(previous));
    //dependecy array
    //change to player, to rerender even if the previous tetromino is the same as upcoming
  }, [player, resetPlayer]);

  return [gameArea, setGameArea];
};
