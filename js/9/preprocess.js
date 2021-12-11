let grid = [];
let rows = input.split(/\n/);
let seabed = [];

console.log('rows',rows);

rows.forEach(row => {
    grid.push(
        row.split('').map(x => parseInt(x))
    )
});

console.log('grid', grid);




