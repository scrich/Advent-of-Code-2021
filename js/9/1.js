// advent of code
// https://adventofcode.com/2021/day/9

let low_points = [];

for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
        const h = grid[row][col];
        let lowest = islowest(h, row, col);
        // console.log(lowest);

        if (islowest(h, row, col)) {
            low_points.push(h);
        }
    }
    
}

console.log('low_points', low_points);

document.write(`Risk level is ${risk_level(low_points)}`);

/**
 * 
 * @param {array} low_points array of integers
 */
function risk_level(low_points) {
    let risk_level = 0;
    low_points.forEach(element => {
        risk_level += element + 1;
        
    });
    return risk_level;
}

/**
 * 
 * @param {Int} h height at the location
 * @param {Int} row location row
 * @param {Int} col location column
 */
function islowest(h, row, col) {
    console.log({h, row, col});
    /**
     * 
     *                  row-1, col
     *      row, col-1    row, col  row, col+1
     *                  row+1, col
     * 
     * 
     */
    
    let neighbours = [];
    
    if (row > 0) {
        neighbours.push(grid[row-1][col]);
    }
    if (row < grid.length -1) {
        neighbours.push(grid[row+1][col]);
    }
    if (col > 0) {
        neighbours.push(grid[row][col-1]);
    }
    if (col < grid[0].length -1) {
        neighbours.push(grid[row][col+1]);
    }

    // console.log(neighbours);
    // console.log(Math.min(...neighbours));

    return h < Math.min(...neighbours);


}
