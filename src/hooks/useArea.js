import { useState } from 'react';
import { createGameArea } from '../Helpers';

export const useArea = () => {
  const [area, setArea] = useState(createGameArea);

  return [area, setArea];
};
