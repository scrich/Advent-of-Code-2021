// advent of code
// https://adventofcode.com/2021/day/8

/** 
 * entries is the array of rows
 * each entry is in two parts, [input, output]
 * 
 * 7 - 3 chars
 * 4 - 4 chars
 * 1 - 2 chars
 * 8 - 7 chars
 * 
 * count how many of the output strings are length (2,3,4,7)
 */

let unique; // the number of times unique value occur

unique = entries.reduce(reducer,0);
// console.log('after unique');
document.write('unique: ', unique);

function reducer(prev, curr) {
    // console.log('curr', curr);
    // console.log('called reducer');
    let output = curr[1].split(' ');
    // console.log('output', output);
    let lengths = output.map(x => x.length);
    // console.log('lengths', lengths);

    let sum_of_valid_lengths;
    sum_of_valid_lengths = lengths.reduce(function(prev, curr) {
        return prev + [2,3,4,7].includes(curr);

    },0);
    // console.log(`found ${sum_of_valid_lengths} valid lengths`);
    return sum_of_valid_lengths + prev;

}