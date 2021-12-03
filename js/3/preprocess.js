// let data = input.split(/\n/);
// // input = input.map(x => parseInt(x));

// // make the array set of pairs

// console.log(data);
// data = data.map(x => x.split(' '));

// console.log(data)

// console.log(input);
// let input1 = input.split(/\n/)
// let input2 = input1.map(x => x.split(' '));
// console.log(inputdata);

/** let's use a function */

// function prepro (string) {
//     return string.split(/\n/).map(x => x.split(''));
// }

// console.log('processing input');
// console.log(input)
// input = prepro(input);
// console.log(input)

// aaaargg

let input_array = input.split(/\n/).slice();
let data = input.split(/\n/).map(x => x.split(' ')).slice()
console.log('data', data);

// https://stackoverflow.com/questions/35922429/why-does-a-js-map-on-an-array-modify-the-original-array