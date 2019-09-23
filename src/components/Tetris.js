import React from 'react';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

import { createGameArea } from '../Helpers';

const Tetris = () => {
  {
    console.log(createGameArea());
  }
  return (
    <div>
      <Stage stage={createGameArea()} />

      <scoreTracker>
        <div>
          <Display text="Score"></Display>
          <Display text="Rows"></Display>
          <Display text="Level"></Display>
        </div>
        <StartButton />
      </scoreTracker>
    </div>
  );
};

export default Tetris;
