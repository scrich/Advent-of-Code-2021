// advent of code
// https://adventofcode.com/2021/day/14

// make a map of rules

let search_elements = [];
let replacements = new Map();

rules.forEach(rule => {
    let element = rule.split(' -> ')[0];
    let insert = rule.split(' -> ')[1];

    search_elements.push(element);
    replacements.set(element, insert);


});


// let's search for all the patterns and note their position
// pattern is stored in {template} (string)


for (let i = 1; i <= 10; i++) {
    buildPolymer(i);
    
}

// count the elements
// CHBN

let total = 0;

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  
 
  var unique = template.split('').filter(onlyUnique);
  
  console.log(unique); // ['a', 1, 2, '1']

unique.forEach(element => {
    let count = template.split('').filter(x => x == element).length
    console.log(element, count)
    total += count;
})

console.log(total);



function buildPolymer(step) {
    console.log(`Processing step ${step}`);
    // console.log(`Input ${template}`);

    // loop through the template from the end.

    for (let index = template.length-2; index >= 0; index--) {
        // see if there's a match
        let pair = template.slice(index, index+2);
        // console.log(pair);
        search_elements.forEach(element => {
            if (pair == element) {
                // console.log(`found ${element}`);
                // console.log(`joining ${template.slice(0,index+1)} + ${replacements.get(element)} + ${template.slice(index+1, )}`);
                template = template.slice(0,index+1) + replacements.get(element) + template.slice(index+1, )
                // console.log(template);
            }
        });
    }

    // console.log(`After step ${step}: ${template}`);
    console.log(`After step ${step}: Polymer length: ${template.length}`);
}

function buildPolymer_(step) {
    console.log(`Processing step ${step}`);
    console.log(`Input ${template}`);
    let results = [];
    search_elements.forEach(element => {
        let pos = template.search(element); // this is no good because we need to find _every_ instance
        if (pos > -1) {
            results.push([pos, replacements.get(element), element]);
        }
    });
    // console.log(results);

    // results are in the format [position, insert character]
    // sort descending by pos
    results.sort((a, b) => b[0] - a[0]);
    console.log(results);

    // assemble the new string
    results.forEach(element => {
        console.log(element[2], template.slice(0, element[0] + 1),element[1],template.slice(element[0] + 1));
        template = template.slice(0, element[0] + 1) + element[1] + template.slice(element[0] + 1);
        console.log(template);
    });

    console.log(`After step ${step}: ${template}`);
    console.log(`Polymer length: ${template.length}`);
}

// NBBNBNBBCCNBCNCCNBBNBBNBBBNBBNBBCBHCBHHNHCBBCBHCB
// NBBNBBNBBBBCNCCNBCNBCNBBNBBCHBHHBCBHNHCNCHCBCBHB
// NBBNBBBCCNBCNCNBBNBBCBHCBHHNHBCHB

// Template:     NNCB
// After step 1: NCNBCHB
//               BNCNHCB
// After step 1: NCNBCHB
//               NCNBCHB

// After step 2: NBCCNBBBCBHCB
// After step 2: NBCCNBBBCBHCB
//               NBCCNBBBCBHCB

// After step 3: NBBBCNCCNBBNBNBBCHBHHBCHB
// After step 3: HBHBHCBNBNBCHCBNBNCHNHHCB
// After step 3: NBBBCNCCNB NB  BCHBHHBC B
// HBHBHCBNBNBCHCBNBNCHNHHCB

// After step 4: NBBNBNBBCCNBCNCCNBBNBBNBBBNBBNBBCBHCBHHNHCBBCBHCB
// After step 4: CHBBCHNBBHCCNBBNBBCNHBHCBHCCNBBNBBCNNCCHBNCHNHHCB
// After step 4: CHBBCHNBBHCCNBBNBBCNHBHCBHCCNBBNBBCNNCCHBNCHNHHCB

// NCCHNBBBNCCHBNBBNBBHCCNCCNNBBBCNHBHBHCBNCHNBBHCCNBBHCCNCCNNBBBCNHBHBHCBNBNCCNCCHBBCNNCCHBNCHNHHCB




// After step 4: NBBNBBBCCNBCNCNBBNBBCBHCBHHNHBCHB