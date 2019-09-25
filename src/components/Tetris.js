import React, { useState } from 'react';
import GameArea from './GameArea';
import Display from './Display';
import StartButton from './StartButton';

import { createGameArea, collisionDetect } from '../Helpers';
//styled-components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

//custom hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useGameArea } from '../hooks/useArea';
import { useGameStatus } from '../hooks/useGameStatus';

const Tetris = () => {
  //speed modifier for the speed at which the tetrominos fall depending on level
  const [dropSpeed, setDropSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPosition, resetPlayer, playerRotate] = usePlayer();
  const [gameArea, setGameArea, rowsCleared] = useGameArea(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  const arrowKeyMovement = direction => {
    if (!collisionDetect(player, gameArea, { x: direction, y: 0 })) {
      updatePlayerPosition({ x: direction, y: 0 });
    }
  };

  const startGame = () => {
    //reset everything
    setGameArea(createGameArea());
    setDropSpeed(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  };

  const moveDown = () => {
    //increase level when players cleared 10 rows
    if (rows > (level + 1) * 10) {
      setLevel(previous => previous + 1);
      //increase speed
      setDropSpeed(1000 / (level + 1) + 200);
    }
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

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        console.log('interval on');
        setDropSpeed(1000 / (level + 1) + 200);
      }
    }
  };

  const moveBlockDown = () => {
    console.log('interval off');
    setDropSpeed(null);
    moveDown();
  };

  //callback function when keys are pressed
  //keycode is destructed from event
  const keyPress = ({ keyCode }) => {
    if (!gameOver) {
      //keycode does not need to be event.keycode
      //keycode 37 is left arrow key
      if (keyCode === 37) {
        arrowKeyMovement(-1);
        //keycode 39 is right arrow key
      } else if (keyCode === 39) {
        arrowKeyMovement(1);
        //keycode 40 is down arrow key
      } else if (keyCode === 40) {
        moveBlockDown();
        //keycode 38 is up arrow key
      } else if (keyCode === 38) {
        playerRotate(gameArea, 1);
      }
    }
  };

  useInterval(() => {
    moveDown();
  }, dropSpeed);

  return (
    //wrapper div is created for the game to take our key press inputs
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={event => keyPress(event)}
      onKeyUp={keyUp}
    >
      <StyledTetris>
        <GameArea area={gameArea} />

        <scoretracker>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text={`Score: ${score}`}></Display>
              <Display text={`Rows: ${rows}`}></Display>
              <Display text={`Level: ${level}`}></Display>
            </div>
          )}
          <StartButton callback={startGame} />
        </scoretracker>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
