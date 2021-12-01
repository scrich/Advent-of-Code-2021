// advent of code
// https://adventofcode.com/2021/day/1

// Accumulator version
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

/**
 * Use map reduce to create the new array and then parse it
 * First make a new array of sets of 3 values
 */

const windows = input.map(function(element, index, array){
    return array[index] + array[index+1] + array[index+2];
})
console.log(windows);

/**
 * 
 * @param {*} previous 
 * @param {*} current 
 * @param {*} index 
 * @param {*} array 
 * @returns 
 */
function reducer(previous, current, index, array) {
    const returns = previous + 1*(parseInt(array[index]) > parseInt(array[index-1]));
    console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
    return returns;
  }

 console.log("reduce"); 

 document.write(windows.reduce(reducer, 0));