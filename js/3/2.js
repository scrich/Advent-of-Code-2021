console.log('first bit '+ results[0]);

/** 
 * oxygen generator
 * 
 * find most common bit value
 * keep numbers where that is in position 1
 */

function mostcommon (array) {
    let ones = array.filter(x => x==1).length;
    let zeros = array.filter(x => x==0).length;

    if (ones>=zeros) {
        return 1
    } else {
        return 0
    }
}

/** now loop 
 * reduce the list
 * starting with position 0
 * 
 * we want a function that returns a shorter list
 * based on the filter criteria
 */

let oxgenrating
oxgenrating = refine_array(data_2d, 0, 'oxygen');
console.log('oxgenrating', oxgenrating);

let oxygen_gen_rating = parseInt(oxgenrating[0].join(""),2);

let carscrubrating
carscrubrating = refine_array(data_2d, 0, 'carbon');
console.log('carscrubrating', carscrubrating);

let carbon_scrub_rating
carbon_scrub_rating = parseInt(carscrubrating[0].join(""),2);

/**
 * 
 * @param {*} array - the array to process
 * @param {*} bit  - which bit in the array to filter by
 * @param {*} chem - string, 'carbon' or 'oxygen'
 */
function refine_array(array, bit, chem) {
     /**
      * we get an array of binary numbers
      * like data_2d, already split into rows
      * 
      * start with first bit
      */
    console.log('entering refine_oxygen_array');
    console.log('sorting on bit ', bit);
    console.log('processing chemical ', chem)
    console.log('input array ', array);
    
    // if bit > the length of a line of the array, stop
    if (bit > array[0].length) {
        return array;
    }


    // return the answer if there is only one row in the array
    if (array.length == 1) {
        return array;
    }

     // make an array of the first bit of each row

    let sortbit = [];

     for (let i = 0; i < array.length; i++) {
         sortbit.push(array[i][bit]);
     }

    console.log('sortbit',sortbit);
    // oxygen - more common
    oxygen = mostcommon(sortbit);
    // C02 - less common
    carbon = 1 - oxygen;

    console.log(oxygen, carbon);
    
    // now filter for the oxygen and carbon arrays

    let oxygen_array = array.filter(x => x[bit] == oxygen);
    console.log('oxygen_array',oxygen_array);

    let carbon_array = array.filter(x => x[bit] == carbon);
    console.log(carbon_array);

    let returns;

    if (chem == 'oxygen') {
        console.log('calling recursion for oxygen with bit '+ bit+1);
        returns = refine_array(oxygen_array, bit+1, 'oxygen');
    } else {
        console.log('calling recursion for carbon with bit '+ bit+1);
        returns = refine_array(carbon_array, bit+1, 'carbon');
    }
    return returns;

    // RECURSION!
    //return refine_oxygen_array(oxygen_array,bit+1);
}









document.write('<h2>Part 2 with recursion</h2>')
document.write('<p>')
document.write('oxygen generator rating: '+ oxygen_gen_rating);
document.write('<br />')
document.write('CO2 scrubber rating: ' + carbon_scrub_rating);
document.write('<br />')
document.write('total: ' + oxygen_gen_rating * carbon_scrub_rating);
document.write('</p>')