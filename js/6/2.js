let lanternfish = new Map();

console.time('part2');
// var input=[3,4,3,1,2];

// set initial values
for (let index = 0; index <= 8; index++) {
    lanternfish.set(index,input.filter(x => x == index).length);
    
}

console.log(lanternfish);

for (let day = 1; day <= 256; day++) {
    // calculate the value of each countdown for the next day
    let next = new Array(9);
    
    for (let days_to_hatch = 0; days_to_hatch < 8; days_to_hatch++) {
        next[days_to_hatch] = lanternfish.get(days_to_hatch + 1);
    }
    next[8] = lanternfish.get(0);
    next[6] = lanternfish.get(7) + lanternfish.get(0);

    // console.log(next);

    // stick it in an array
    // update the lanternfish Map
    for (let index = 0; index <= 8; index++) {
        lanternfish.set(index,next[index]);
    }
    // console.log(lanternfish);

    // calculate number of fish
    let total = 0;
    for (let index = 0; index <= 8; index++) {
        // console.log('index', index);
        // console.log('lanternfish', lanternfish.get(index));
        total += lanternfish.get(index);
    }


    console.log(`After ${day} days there are ${total} fish`);

}

console.timeEnd('part2');

// part2: 422.840087890625 ms with console logging
// part2: 16.01513671875 ms with test data, limited logging
// part2: 16.13330078125 ms puzzle data
// part2: 64.40576171875 ms with 256 days