let seabed = []


let seabed_rows = input.split(/\n/)
seabed_rows.forEach(row => {
    seabed.push(row.split(''))
});

console.log(seabed);