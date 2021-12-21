let search_elements = [];
let replacements = new Map();

rules.forEach(rule => {
    let element = rule.split(' -> ')[0];
    let insert = rule.split(' -> ')[1];

    search_elements.push(element);
    replacements.set(element, insert);
});

// map of results

let pair_map = new Map();

// get the initial pairs
let pairs = []
for (let index = 0; index < template.length-1; index++) {
    pairs.push(template.slice(index,index+2))
    
}
console.log(pairs);

pairs.forEach(pair => {
    search_elements.forEach(element => {
        if (pair == element) {
            let { first, second } = getPairs(element);
            console.log(first, second);
            storeInMap(first, second)
        }
    })
});

function getPairs(element) {
    let first = element.slice(0, 1) + replacements.get(element);
    let second = replacements.get(element) + element.slice(1);
    return { first, second };
}

function storeInMap(first, second) {
    add_to_pair_map(first);
    add_to_pair_map(second);
}

console.log(pair_map);

for (let step = 10; step <= 1; step++) {
    search_elements.forEach(element => {
        if (pair_map.has(element)) {
            let { first, second } = getPairs(element);
            console.log(first, second);
            storeInMap(first, second)
        }
    });
    console.log(`step ${step}`);
}




function add_to_pair_map(item) {
    if (pair_map.has(item)) {
        console.log(`adding ${item} to pair_map`);
        pair_map.set(pair_map.get(item) + 1);
    } else {
        pair_map.set(item, 1);
    }
}
// 'grows quickly' ha

// each pair will make a trio, ie two new pairs

// starts with NNCB

// NN NC CB         pair from step 0 
// NCN NBC CHB      makes these trios
// NC CN NB BC CH HB

// NBCCNBBBCBHCB

// NBBBCNCCNBBNBNBBCHBHHBCHB


// Template:     NNCB
// After step 1: NCNBCHB
// After step 2: NBCCNBBBCBHCB
// After step 3: NBBBCNCCNBBNBNBBCHBHHBCHB
// After step 4: NBBNBNBBCCNBCNCCNBBNBBNBBBNBBNBBCBHCBHHNHCBBCBHCB