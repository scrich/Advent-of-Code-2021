// advent of code
// https://adventofcode.com/2021/day/7

console.log(input);

let cave = 0;

// fuel = sum of distance to cave

let fuel;

// fuel = input.reduce(sum_array,0);

fuel = input.reduce(dist_to_cave,0);
console.log(`distance to cave at ${cave} is ${fuel}`);

let lowest = new Array(2); // cave position, total

lowest = [cave, input.reduce(dist_to_cave,0)]

for (let index = 0; index < Math.max(...input); index++) {
    cave = index;
    fuel = input.reduce(dist_to_cave,0);
    console.log(`distance to cave at ${cave} is ${fuel}`);
    if (fuel < lowest[1]) {
        lowest = [cave, fuel];
    }
    
}

console.log(lowest);

function sum_array(prev,curr) {
    return prev+curr;
}

function dist_to_cave(prev, crab) {
    return prev + fuel_cost(Math.abs(crab-cave));
}

function fuel_cost(num) {

    return num/2 * (num + 1);
}
