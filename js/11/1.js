// advent of code
// https://adventofcode.com/2021/day/11

let steps = 20;
let total_flashes = 0;
let flash_sum = -1;
var part1 = document.getElementById('part1');

render(octopi, 0);
let step = 1;

do {
// for (let step = 1; step <= steps; step++) {
    // render(octopi, step);

    // all octopi raise energy by 1
    for (let i = 0; i < octopi.length; i++) {
        for (let j = 0; j < octopi[i].length; j++) {
            let e = octopi[i][j].energyUp();
            // console.log(i,j,e);
        }
    }

    // all octopi reset flash
    for (let i = 0; i < octopi.length; i++) {
        for (let j = 0; j < octopi[i].length; j++) {
            let e = octopi[i][j].stepReset();
            // console.log(i,j,e);
        }
    }

    flash_sum = 0;
    // check total of all energies - if zero, all flashed    
    for (let i = 0; i < octopi.length; i++) {
        for (let j = 0; j < octopi[i].length; j++) {
            flash_sum += octopi[i][j].energy;

            // console.log(i,j,e);
        }
    }
    console.log(`total energy after ${step} steps: ${flash_sum}`);
    // if (flash_sum == 0) {
    //     break;
    // }

    // render(octopi, step);
    renderid(octopi, step);
    console.log(step, total_flashes);
    step ++

    // if (step > steps) {
    //     break;
    // }

} while(flash_sum != 0);  // end of step

    
document.write(`Total flashes: ${total_flashes}`);


/**
 * 
 * @param {array} octarray array of Octopus objects
 */
function render(octarray, step) {
    document.write(`<p>Step ${step}</p><pre>\n`);
    for (let i = 0; i < octarray.length; i++) {
        for (let j = 0; j < octarray[i].length; j++) {
            const element = octarray[i][j];
            document.write(element.energy);
        }
        document.write('\n');
    }
    document.write('</pre>\n');
}

function renderid(octarray, step) {
    let long_string = '';
    long_string+=`<p>Step ${step}</p><pre>\n`;
    for (let i = 0; i < octarray.length; i++) {
        for (let j = 0; j < octarray[i].length; j++) {
            const element = octarray[i][j];
            long_string += element.energy;
        }
        long_string += '\n';
    }
    long_string+='</pre>\n';
    part1.innerHTML=long_string;
}