// advent of code
// https://adventofcode.com/2021/day/5

/** 
 * Let's use a Map to map the seabed and hydrothermal vents
 */

let seabed = new Seabed;
console.log(`- processing lines`);

for (let line of straight_lines) {
    console.log(line);
    seabed.plot_straight_line(line);
}

seabed.render(10,10);

// result - any values in the Map >= 2

let two_or_more = [...seabed.vents.values()].filter(x => x>=2).length;
document.write(`Vents with 2 or more lines: ${two_or_more}`)