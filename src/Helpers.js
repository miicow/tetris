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
