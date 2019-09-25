//creating the gameplay area for the tetrominos
//exporting the variables and functions - for later use in components

export const AREA_WIDTH = 12;
export const AREA_HEIGHT = 20;

//function to create gameplay area with series of arrays (nested, multi-dimension)

export const createGameArea = () =>
  //create array from something(another array created from the area height)
  //the inline function fills the array,
  //create new array for each row
  Array.from(Array(AREA_HEIGHT), () =>
    //0 represents nothing - 0 changes depending on the tetrominos occupying the space
    //clear will change if merge occurs
    new Array(AREA_WIDTH).fill([0, 'clear'])
  );

export const collisionDetect = (player, area, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      //check cell is not the empty cell but a tetromino
      if (player.tetromino[y][x] !== 0) {
        if (
          //check move is within the boundary of the height(y)
          !area[y + player.position.y + moveY] ||
          //check move is within the boundary of width(x)
          !area[y + player.position.y + moveY][x + player.position.x + moveX] ||
          //check cell that we are moving to isnt set to 'clear'
          area[y + player.position.y + moveY][
            x + player.position.x + moveX
          ][1] !== 'clear'
        ) {
          return true;
        }
      }
    }
  }
};
