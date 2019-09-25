import { useState, useEffect, useCallback } from 'react';

export const useGameStatus = rowsCleared => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  const linePoints = [40, 100, 300, 1200];

  const calculateScore = useCallback(() => {
    //check if there are score
    if (rowsCleared > 0) {
      //tetris score keeping in original tetris
      setScore(
        previous => previous + linePoints[rowsCleared - 1] * (level + 1)
      );
      setRows(previous => previous + rowsCleared);
    }
  }, [level, linePoints, rowsCleared]);

  useEffect(() => {
    calculateScore();
  }, [calculateScore, rowsCleared, score]);

  return [score, setScore, rows, setRows, level, setLevel];
};
