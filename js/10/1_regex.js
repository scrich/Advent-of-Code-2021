// advent of code
// https://adventofcode.com/2021/day/10


// find the corrupted lines - chunk closes with wrong character

lines.forEach(line => {
    let scratch;
    scratch = removeLegalPairs(line);
    console.log({scratch});
});

console.log('we have finished');


/**
 * 
 * @param {string} line 
 */
function removeLegalPairs(line) {
    console.log({line});
    // remove valid pairs
    let found = line.match(/((\(\))|(\{\})|(\[\])|(<>))+/g);
    console.log({found});
    if (found) {
        console.log(`we found ${found}`);
        let clean = line.replace(/((\(\))|(\{\})|(\[\])|(<>))+/g, "");
        console.log({clean});
        return clean;
    } else {
        return 'no legal pairs'
    }
    
    if (line.length < 2) {
        return 'less than 2'
    } 
}