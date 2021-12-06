// advent of code
// https://adventofcode.com/2021/day/6

let prev = input;
let next;

console.log(prev);

let babies = []; // empty array for babies

console.time('count_fish')
for (let day = 1; day <= 80; day++) {
    next = prev.map(age_fish).concat(babies);
    // console.log(`Day ${day} `, next);
    console.log(`After day ${day} there are ${next.length} fish`);
      
    prev = next.slice();
    babies = [];
}
console.timeEnd('count_fish')
document.write(`there are ${next.length} fish`)

/** times
 * count_fish: 7986.04296875 ms with 'called age_fish'
 * count_fish: 17.893798828125 ms with that log removed -  test data 
 * count_fish: 162.60107421875 ms with the puzzle data
 */

function age_fish(age) {
    /**
     * Each day, 
     *      a 0 becomes a 6 and adds a new 8 to the end of the list, 
     *      while each other number decreases by 1 
     *      if it was present at the start of the day.
     */

    // console.log('called age_fish');  
    let new_age;

    if (age == 0) {
        new_age = 6;
        babies.push(8);
    } else {
        new_age = age-1;
    }

    return new_age;
}