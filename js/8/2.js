console.log('part 2');

    let decoded = new Map();
    let coded = new Map();
    let segments = new Map();
    let super_output_total = 0;

entries.forEach(entry => {
    // console.log(entry);
    // let input = entry[0].split(' ').map(x => {
    //     // make all the inputs alphabetical
    //     return x.split('').sort().join('');
    // });
    let input = entry[0].split(' ').map(x => sortString(x));
    // console.log('input',input);

    // find the top character, 'a'
    // what is in the 3 string but not the 2 string

    // put the values we know into a Map
    // decoded: number -- string
    // segments: real segment -- mixed up segment

    

    decoded.set(1, input.filter(x => x.length == 2)[0]);
    decoded.set(7, input.filter(x => x.length == 3)[0]);
    decoded.set(4, input.filter(x => x.length == 4)[0]);
    decoded.set(8, input.filter(x => x.length == 7)[0]);

    coded.set(decoded.get(1),1);
    coded.set(decoded.get(4),4);
    coded.set(decoded.get(7),7);
    coded.set(decoded.get(8),8);
    
    // console.log('decoded', decoded);

    // 'a' is the segment in 7 but not 1

    let one = decoded.get(1);       // 2 chars
    let seven = decoded.get(7);     // 3 chars
    let eight = decoded.get(8);

    
    // console.log('seven', seven);

    let a = [...seven].filter(x => (one.includes(x) == false))[0];
    // console.log('a -> ',a);

    segments.set(
        'a', 
        [...decoded.get(7)].filter(
            x => (decoded.get(1).includes(x) == false)
            )[0]
        )
    
    // nine is four + a + g, so now we can find g

    let nine_contenders = input.filter(x => x.length == 6);
    

    // get the string that is four + a - 5 chars
    let nearly_nine = sortString(decoded.get(4) + segments.get('a'));
    // console.log('nine', nearly_nine, nine_contenders);
    // find the string that matches + one char
    let nine = nine_contenders.filter(x => {
        // correct one will include all the chars from nearly_nine
        // x is each contender - a string.
        // let's count how many chars don't match
        return not_in_string(nearly_nine, x).length == 1;
    })[0];
    
    // console.log('nine is ', nine);
    // console.log('nearly_nine', nearly_nine);
    let g = not_in_string(nearly_nine, nine)
    // console.log('segment g is ', g);

    // the extra character is 'g' 
    // and the string is '9'

    coded.set(nine, 9);
    decoded.set(9, nine);
    segments.set('g', g);

    // the other two nine contenders are 6 and 0. 
    // 8 has all the chars of 7

    nine_contenders.splice(
        nine_contenders.indexOf(nine),1
    );
    let zero_contenders = nine_contenders.slice();
    let zero = zero_contenders.filter(x => {
        return not_in_string(x, seven).length == 0;
    })[0];
    // console.log('zero', zero);
    // console.log('zero contenders', zero_contenders);

    coded.set(zero,0);
    decoded.set(0, zero);

    // the last nine_contender is 6
    nine_contenders.splice(
        nine_contenders.indexOf(zero),1
    );
    let six = nine_contenders[0];

    coded.set(six,6);
    decoded.set(6,six);

    // d is the difference between 0 and 8

    let d = not_in_string(zero,eight);

    segments.set('d', d);   

    // now the three strings of 5 - 3, 2, 5
    // 3 has all the same chars as 7

    let five_long = input.filter(x => x.length == 5);
    // console.log('five_long', five_long);

    let three = five_long.filter(x => {
        return not_in_string(x, seven).length == 0;
    })[0];

    // console.log('three', three);

    coded.set(three,3);
    decoded.set(3,three);

    // now sort out 2 and 5
    // 6 and 5 are only one char different

    five_long.splice(
        five_long.indexOf(three),1
    );
    // console.log('five_long only has two left ', five_long);
    let five = five_long.filter(x => {
        return not_in_string(x, six).length == 1;
    })[0];

    // console.log('five is ', five);

    coded.set(five, 5);
    decoded.set(5, five);

    five_long.splice(
        five_long.indexOf(five), 1
    );

    let two = five_long[0];

    coded.set(two, 2);
    decoded.set(2, two);

        // console.log('segments', segments);
    // console.log('coded', coded);
    // console.log('decoded', decoded);


/**
 * 
 * now decode
 */

 let output = entry[1].split(' ').map(x => sortString(x));
// console.log('output', output);

let output_string = '';

output.forEach(element => {
    output_string += coded.get(element)
});

output_value  = parseInt(output_string);
console.log('output', output_value);
super_output_total += output_value;
console.log(typeof(output_value));
console.log('the super output total is ', super_output_total);

});

document.write('the super output total is ', super_output_total)





function sortString(string) {
    return string.split('').sort().join('');
}

/**
 * 
 * @param {string} test 
 * @param {string} sample 
 */
function count_matches(test, sample) {
    // returns chars in sample that are in test
    return sortString([...sample].filter(x => {
        return test.includes(x)
    }).join(''));
}

function not_in_string (test, sample) {
    // returns chars in sample that are not in test
    return [...sample].filter(x => {
        return !test.includes(x)
    }).join('');
}