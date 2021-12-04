// advent of code
// https://adventofcode.com/2021/day/3

let gamma = [];   // the more common
let epsilon = []; // the less common

// input in data_2d

// let results = new Array(data_2d[0].length);
let results = [];
console.log(results);

for (let i = 0; i < data_2d[0].length; i++) {
    const row = data_2d[i];
    // console.log('row',row);

    let transpose = []

    for (let j = 0; j < data_2d.length; j++) {
        const element = row[j];
        // console.log(element);
        transpose.push(data_2d[j][i])
    }
    // console.log('transpose',transpose);
    results.push(transpose);
}

console.log(results);

/**
 * now work out gamma and epsilon
 * 
 * count ones and zeros in each line
 */

for (let i = 0; i < results.length; i++) {
    const element = results[i];
    
    let ones = element.filter(x => x==1).length;
    let zeros = element.filter(x => x==0).length;
    console.log(ones, zeros);

    if (ones>zeros) {
        gamma.push(1);
        epsilon.push(0);
    } else {
        epsilon.push(1);
        gamma.push(0);
    }

}

console.log('gamma', gamma);
console.log('epsilon', epsilon);

// calculate decimal

let gamma_bin = gamma.join("");
let epsilon_bin = epsilon.join("");

let gamma_d = parseInt(gamma_bin, 2);
let epsilon_d = parseInt(epsilon_bin, 2);

console.log(gamma_d, epsilon_d, gamma_d*epsilon_d);

document.write('<h2>Part 2 with Switch</h2>')
document.write('<p>')
document.write('gamma: '+ gamma_d);
document.write('<br />')
document.write('epsilon: ' + epsilon_d);
document.write('<br />')
document.write('total: ' + gamma_d * epsilon_d);
document.write('</p>')