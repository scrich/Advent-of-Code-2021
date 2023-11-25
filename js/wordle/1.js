// advent of code
// https://adventofcode.com/2021/

// let letters = words.map(x => x.split(''));

let letter_count = words.map(letter_dist);
console.log(letter_count);

let results = [];
for (let index = 0; index <= 5; index++) {
    results.push([index, letter_count.filter(x => x == index).length])
}

console.table(results)

function letter_dist(word) {
    let letters = word.split('');
    let unique_letters = new Set(letters)
    return unique_letters.size
}