// advent of code
// https://adventofcode.com/2020/day/2

// loop through the input

// filter forward

console.log('data: ', data);
const forward = input_array.filter(x => x.includes('forward'))
const up = input_array.filter(x => x.includes('up'))
const down = input_array.filter(x => x.includes('down'))
console.log('forward: '+forward);
console.log('down', down);
console.log('up', up);

function dist(previous, current) {
  let pair = current.split(' ')
  return previous + parseInt(pair[1]);
}

let distance = forward.reduce(dist, 0);
console.log(distance);

let depth = down.reduce(dist,0) - up.reduce(dist,0);
console.log(depth);

document.write('<p>')
document.write('distance: '+ distance);
document.write('<br />')
document.write('depth: ' + depth);
document.write('<br />')
document.write('total: ' + depth * distance);
document.write('</p>')

