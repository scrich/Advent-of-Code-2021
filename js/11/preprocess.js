let octrows = input.split(/\n/);
console.log(octrows);

let octopi = make2DArray(octrows.length);

for (let i = 0; i < octrows.length; i++) {
    for (let j = 0; j < octrows[i].length; j++) {
        octopi[i][j] = new Octopus(i,j,octrows[i][j]);
    }
    
}






function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }
    return arr;
  }