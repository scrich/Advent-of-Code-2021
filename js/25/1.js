// advent of code
// https://adventofcode.com/2021/day/25

let east = new Map()
let south = new Map()
let empty = new Map()
let cucumbers = new Map()

let height = seabed.length;
let width = seabed[0].length;

// set up the Maps of cucumbers
for (let i = 0; i < seabed.length; i++) {
    for (let j = 0; j < seabed[i].length; j++) {
        switch (seabed[i][j]) {
            case '>':
                // east
                cucumbers.set(`${i},${j}`, new Cucumber('east', i, j))
                break;
            case 'v':
                // south
                cucumbers.set(`${i},${j}`, new Cucumber('south', i, j))
                break;
            default:
                // empty
                cucumbers.set(`${i},${j}`, 0)
                break;
        }
    }
}

render_map(cucumbers)
let move_counter = 0;

for (let step = 1; step < 1000; step++) {
    move_counter = 0;
    document.write(`<p>step ${step}</p>`)
    // check if the East can move
    step_dir('east');
    // check if the south can move
    step_dir('south');
  
    render_map(cucumbers);
    document.write(`moves: ${move_counter}\n`)
    if (move_counter == 0) {
        document.write(`no moves on step ${step}`)
        break;
    }
}








// render_map(cucumbers);

function step_dir(dir) {
    update(dir);
    move(dir);
    // render_map();
}



function move(dir) {
    cucumbers.forEach(cucumber => {
        if (cucumber.dir == dir) {
            // east cucumber
            // console.log(cucumber.dir, cucumber.x, cucumber.y);
            move_counter += cucumber.move(dir);

        }
    });
}

function update(dir) {
    cucumbers.forEach(cucumber => {
        if (cucumber.dir == dir) {
            // east cucumber
            // console.log(cucumber.dir, cucumber.x, cucumber.y);
            cucumber.check_next(dir);

        }
    });
}

function render(seabed) {
    render_html = '<pre>'
    render_html += 'seabed \n\n'

    for (let i = 0; i < seabed.length; i++) {
        for (let j = 0; j < seabed[i].length; j++) {
            render_html += seabed[i][j];
        }
        render_html += '\n'

    }
}


function render_map(sea_map) {
    render_html = '<pre>'
    render_html += 'seabed \n\n'


    for (let i = 0; i < seabed.length; i++) {
        for (let j = 0; j < seabed[i].length; j++) {
            if (cucumbers.get(`${i},${j}`) == 0) {
                render_html += '.'
            } else {
                render_html += cucumbers.get(`${i},${j}`).char;
            }
        }
        render_html += '\n'
    }
    render_html += '</pre>'

    document.getElementById('part1').innerHTML = render_html;
    // document.write(render_html)
}
