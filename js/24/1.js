// advent of code
// https://adventofcode.com/2021/day/24

// init
// we will construct the variables as objects, so we can pass them into the functions
let w = new ALUVar('w', 0);
let x = new ALUVar('x', 0);
let y = new ALUVar('y', 0);
let z = new ALUVar('z', 0);

let valid = [];


let model_no = 99849246899999;
let ALUinput = model_no.toString().split('');
console.log(ALUinput);

var count = 0;

// document.write('<pre>');
// for (let index = 11111111111111; index < 11111111111112; index++) {
//     let ALUinput = index.toString().split('');
//     console.time('ALU')
    let result = ALUProgram(instructions, ALUinput);
//     console.log(index, z.value);
//     console.timeEnd('ALU')
//     if (z.value == 0) {
//         valid.push(index)
//         document.write(`${index} \n`)
//     }
// }
// document.write('</pre>');

// console.log(`valid ${valid}`);


// 350ms with console logging

/**
 * 
 * @param {Array} instructions 
 * @param {Array} input 
 * @returns Array of all 4 variables
 */
function ALUProgram(instructions, input) {
    
    instructions.forEach(instruction => {
        count++;
        console.log(`${count}: instruction: ${instruction}`);
        let params = instruction.split(' ');

        switch (params.shift()) {
            case 'inp':
                // take the next input from the input array
                // console.log(`inp params: ${params}`);
                inp(eval(params[0]), parseInt(input.shift()))
                break;
            case 'add':
                // console.log(`add params: ${params}`);
                add(eval(params[0]), eval(params[1]))
                break;
            case 'mul':
                // console.log(`mul params: ${params}`);
                mul(eval(params[0]), eval(params[1]))

                break;
            case 'div':
                // console.log(`div params: ${params}`);
                div(eval(params[0]), eval(params[1]))
                break;
            case 'mod':
                // console.log(`mod params: ${params}`);
                mod(eval(params[0]), eval(params[1]))
                break;
            case 'eql':
                // console.log(`eql params: ${params}`);
                eql(eval(params[0]), eval(params[1]))
                break;

            default:
                console.log(`no instruction found in ${instruction}`);
                break;
        }
        console.log(w.value, x.value, y.value, z.value);
    })

    return [w.value, x.value, y.value, z.value]
}

function inp(a, num) {
    a.value = num;
    // console.log(a);
}

function add(a, b) {
    if (typeof (b) == 'object') {
        a.value = a.value + b.value;
    } else {
        a.value = a.value + parseInt(b);
    }
    // console.log(a);
}

function mul(a, b) {
    // console.log(typeof (b));
    if (typeof (b) == 'object') {
        a.value = a.value * b.value;
    } else {
        a.value = a.value * parseInt(b);
    }
    // console.log(a);
}

function div(a, b) {
    if (typeof (b) == 'object') {
        a.value = Math.floor(a.value / b.value);
    } else {
        a.value = Math.floor(a.value / parseInt(b));
    }

    // console.log(a);
}

function mod(a, b) {
    if (typeof (b) == 'object') {
        a.value = a.value % b.value;
    } else {
        a.value = a.value % parseInt(b);
    }

    // console.log(a);
}

function eql(a, b) {
    if (typeof (b) == 'object') {
        a.value = 1 * (a.value == b.value)
    } else {
        a.value = 1 * (a.value == parseInt(b))
    }

    // console.log(a);
}




