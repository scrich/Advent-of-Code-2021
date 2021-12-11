// let's try array push/pop

let results = [];
let incomplete = [];
let score = 0;
let syntax_scores = new Map();
syntax_scores.set(')',3).set(']',57).set('}',1197).set('>',25137);

let completion_scores = new Map();
completion_scores.set('(',1).set('[',2).set('{',3).set('<',4);

lines.forEach(line => {
    console.log({line});
    let result = validateLine(line);
    console.log({result});
    if (typeof(result) == 'string') {
    results.push(result);
    } else {
        incomplete.push(result);
    }

});

console.log('we have finished syntax checking');
console.log({results});


// work out scores

let scores = results.filter(x => x != 'incomplete');
console.log({scores});

score = scores.reduce(function (prev, curr) {
    console.log('inside reducer');
    console.log({prev, curr});
    console.log(`I'm adding ${syntax_scores.get(curr)}`);
    return syntax_scores.get(curr) + prev;
},0);


console.log({score});

let completion_score = 0;

let array_of_completions = [];
// work out completion scores
incomplete.forEach(element => {
    let completions = reverseArray(element);
    console.log(completions);

    let this_score = completions.reduce(function (prev, curr) {
        return prev*5 + completion_scores.get(curr);
    },0);
    console.log({this_score});
    array_of_completions.push(this_score)

});
console.log(array_of_completions);
array_of_completions.sort((a, b) => (a - b));
console.log(array_of_completions);

let final_bloody_score = array_of_completions[(array_of_completions.length-1)/2];

console.log({final_bloody_score});

// reverse the array, or work from the end




function reverseArray (array) {
    let returns = [];
    array.forEach(element => {
        returns.unshift(element);
    });
    return returns;
}


/**
 * 
 * @param {string} line 
 */
function validateLine(line) {
    let chars = line.split('');
    let seq = [];
    let opening = '{[(<';
    let closures = new Map();
    closures.set('(',')').set('[',']').set('{','}').set('<','>');
    // console.log(closures);
    
    for (let i = 0; i < chars.length; i++) {
        const element = chars[i];
        
        
        // console.log(i, element, seq);
        if (opening.includes(element)) {
            seq.push(element);
            // console.log(i, seq);
        } else {
            // it's a close element - check it's the right one
            correct_close = closures.get(seq.pop());
            // console.log({correct_close, element});
            if (correct_close != element) {
                console.log(`Expected ${correct_close}, got ${element}`);
                return element;
            } else {
                // console.log(`closed correctly ${correct_close}, got ${element}`);
            }


           
        }
    }
    // console.log({chars});
    return seq;
}
