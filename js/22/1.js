// advent of code
// https://adventofcode.com/2021/day/22

console.time('cuboids');
let cubeSpace = new Map();

reboot_steps.forEach(reboot_step => {
    // eg 'on x=10..12,y=10..12,z=10..12'
    console.log('processing reboot_step');
    console.log(reboot_step);
    let settings = parseInstruction(reboot_step);
    console.log(`settings.state ${settings.state}`);
    for (let x = settings.xmin; x <= settings.xmax; x++) {
        for (let y = settings.ymin; y <= settings.ymax; y++) {
            for (let z = settings.zmin; z <= settings.zmax; z++) {
                setVoxel(x,y,z,settings.state);
                // console.log(`${x},${y},${z} ${settings.state}` );
            }   
        }
    }
});

console.log(cubeSpace);

let allOn = 0;

console.timeLog('cuboids')

cubeSpace.forEach(value => {
    if (value == 'on') {
        allOn++;
    }
})

console.log(`Voxels that are on: ${allOn}`);
console.timeEnd('cuboids');

/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 * @param {boolean} state 
 */
function setVoxel(x,y,z,state) {
    // construct coord string
    cubeSpace.set(`${x},${y},${z}`, state);
}

/**
 * 
 * @param {string} instruction 
 */
function parseInstruction(instruction) {
    /**
     * examples
     * 
     * on x=10..12,y=10..12,z=10..12
     * on x=11..13,y=11..13,z=11..13
     * off x=9..11,y=9..11,z=9..11
     * on x=10..10,y=10..10,z=10..10
     */

    let parts = instruction.split(' ');
    let state = parts[0];

    axis_settings = parts[1].split(',');
    x = axis_settings[0].split('=')[1].split('..');
    y = axis_settings[1].split('=')[1].split('..');
    z = axis_settings[2].split('=')[1].split('..');
    console.log(state, axis_settings);

    return { 'xmin': parseInt(x[0]), 'xmax': parseInt(x[1])
            ,'ymin': parseInt(y[0]), 'ymax': parseInt(y[1])
            ,'zmin': parseInt(z[0]), 'zmax': parseInt(z[1])
            , state
        }
}

/**
 * 
 * @param {string} instruction 
 */
function setCube(instruction) {
    // parse the reboot step instruction

    // loop through the cuboid
    // x
        // y
            // z

            // set or unset the cubes
}
