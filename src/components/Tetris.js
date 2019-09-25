import React, { useState } from 'react';
import GameArea from './GameArea';
import Display from './Display';
import StartButton from './StartButton';

import { createGameArea, collisionDetect } from '../Helpers';
//styled-components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

//custom hooks
import { usePlayer } from '../hooks/usePlayer';
import { useArea, useGameArea } from '../hooks/useArea';

const Tetris = () => {
  //speed modifier for the speed at which the tetrominos fall depending on level
  const [dropSpeed, setDropSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPosition, resetPlayer] = usePlayer();
  const [gameArea, setGameArea] = useGameArea(player, resetPlayer);

  const arrowKeyMovement = direction => {
    if (!collisionDetect(player, gameArea, { x: direction, y: 0 })) {
      updatePlayerPosition({ x: direction, y: 0 });
    }
  };

  const startGame = () => {
    //reset everything
    setGameArea(createGameArea());
    resetPlayer();
    setGameOver(false);
  };

  const moveDown = () => {
    if (!collisionDetect(player, gameArea, { x: 0, y: 1 })) {
      updatePlayerPosition({ x: 0, y: 1, collide: false });
    } else {
      if (player.position.y < 1) {
        setGameOver(true);
        setDropSpeed(null);
      }
      updatePlayerPosition({ x: 0, y: 0, collide: true });
    }
  };

  const moveBlockDown = () => {
    moveDown();
  };

  //callback function when keys are pressed
  //keycode is destructed from event
  const keyPress = keycode => {
    if (!gameOver) {
      //keycode does not need to be event.keycode
      //keycode 37 is left arrow key
      if (keycode === 37) {
        arrowKeyMovement(-1);
        //keycode 39 is right arrow key
      } else if (keycode === 39) {
        arrowKeyMovement(1);
        //keycode 40 is down arrow key
      } else if (keycode === 40) {
        moveBlockDown();
      }
    }
  };

  return (
    //wrapper div is created for the game to take our key press inputs
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={event => keyPress(event.keyCode)}
    >
      <StyledTetris>
        <GameArea area={gameArea} />

        <scoreTracker>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score"></Display>
              <Display text="Rows"></Display>
              <Display text="Level"></Display>
            </div>
          )}
          <StartButton callback={startGame} />
        </scoreTracker>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
