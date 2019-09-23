//prettier-ignore
export const TETROMINOS = {
  0: { shape: [[0]], color: '0, 0, 0' },
  I: {
    shape: [
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
    ],
    color: '0, 255, 255'
  },

  J: {
    shape: [
      [0, 'J', 0],
      [0, 'J', 0],
      ['J', 'J', 0],
    ],
    color: '0, 0, 255'
  },

  L: {
    shape: [
      ['L', 0, 0],
      ['L', 0, 0],
      ['L', 'L', 0],
    ],
    color: '255, 165, 0'
  },

  O: {
    shape: [
      ['O', 'O'],
      ['O', 'O']
    ],
    color: '255, 255, 0'
  },

  T: {
    shape: [
      ['T', 'T', 'T'],
      [0, 'T', 0],
      [0, 0, 0],
    ],
    color: '128, 0, 128'
  },

  Z: {
    shape: [
      [0, 0, 0],
      ['Z', 'Z', 0],
      [0, 'Z', 'Z'],
    ],
    color: '255, 0, 0'
  },

  S: {
    shape: [
      [0, 0, 0],
      [0, 'S', 'S'],
      ['S', 'S', 0],
    ],
    color: '0, 128, 0'
  },

};

export const generateRandomTetrominos = () => {
  const tetrominos = 'IJLOTZS';
  const randomTetrominos =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];

  return TETROMINOS[randomTetrominos];
};
