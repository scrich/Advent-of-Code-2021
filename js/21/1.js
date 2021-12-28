// advent of code
// https://adventofcode.com/2021/day/21

let scapegoat = 0;
let winner = false;
let dicethrows = 0;

let dice = new Dice();

do  {
    winner = p1.move(dice.roll(3));
    dicethrows += 3;
    console.log(`${p1.label} moves to ${p1.space} for a total score of ${p1.score}`);
    if (winner) {
        break;
    }
    
    winner = p2.move(dice.roll(3));
    dicethrows += 3;
    console.log(`${p2.label} moves to ${p2.space} for a total score of ${p2.score}`);
    
    scapegoat ++;
    
} while (winner == false)

console.log(dicethrows);

let result; 

if (p1.isWinner()) {
    result = p2.score * dicethrows;
} else {
    result = p1.score * dicethrows;
}


console.log(result);

console.log('finished');
