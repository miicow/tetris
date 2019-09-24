import { useState } from 'react';
import { createGameArea } from '../Helpers';

export const useGameArea = () => {
  const [gameArea, setGameArea] = useState(createGameArea);

  return [gameArea, setGameArea];
};
