import React from 'react';
import GameArea from './GameArea';
import Display from './Display';
import StartButton from './StartButton';

import { createGameArea } from '../Helpers';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <GameArea area={createGameArea()} />

        <scoreTracker>
          <div>
            <Display text="Score"></Display>
            <Display text="Rows"></Display>
            <Display text="Level"></Display>
          </div>
          <StartButton />
        </scoreTracker>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
