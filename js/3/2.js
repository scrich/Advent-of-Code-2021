// console.log(input_array);

depth = 0;
distance = 0;

console.log(depth, distance);

input_array.forEach(element => {
    let pair = element.split(' ');
    console.log(pair);
    switch (pair[0]) {
        case 'up':
            depth = depth - parseInt(pair[1]);
            break;
        case 'down':
            depth = depth + parseInt(pair[1]);
            break;
        case 'forward':
            distance = distance + parseInt(pair[1]);
        default:
            break;
    }

});

document.write('<h2>Part 1 with Switch</h2>')
document.write('<p>')
document.write('distance: '+ distance);
document.write('<br />')
document.write('depth: ' + depth);
document.write('<br />')
document.write('total: ' + depth * distance);
document.write('</p>')

depth = 0;
distance = 0;
let aim = 0;

input_array.forEach(element => {
    let pair = element.split(' ');
    console.log(pair);
    switch (pair[0]) {
        case 'up':
            aim = aim - parseInt(pair[1]);
            break;
        case 'down':
            aim = aim + parseInt(pair[1]);
            break;
        case 'forward':
            distance = distance + parseInt(pair[1]);
            depth = depth + (aim * pair[1]);
        default:
            break;
    }
    console.log(depth, distance, aim);
});



document.write('<h2>Part 2 with Switch</h2>')
document.write('<p>')
document.write('distance: '+ distance);
document.write('<br />')
document.write('depth: ' + depth);
document.write('<br />')
document.write('total: ' + depth * distance);
document.write('</p>')