// advent of code
// https://adventofcode.com/2021/day/12

let routes = [];    // list of all the routes

// start with the two starts
/** start
 * A
 * c
 * b
 * d
 * end
 * 
 * start-A
 * start-b
 * A-c
 * A-b
 * b-d
 * A-end
 * b-end
*/

let result = planroute('start', edges);

function planroute(startpoint, segments) {
    // start at startpoint
    // segments is the remaining segments

    let split = split_edges(segments, startpoint);
    let A = split[0];
    let B = split[1];
    console.log('split',split);
    console.log('A',A);
    if (A[1] == 'end') {
        return 'end';
    }

    // make a route for each startpoint
    
}

function split_segment(edge) {
    return edge.split('-');
}



function split_segment(segment) {
    return segment.split('-');
}




function split_edges(edges, query) {
    let positive = edges.filter(edge => {
        return edge.includes(query)
    });
    let negative = edges.filter(edge => {
        return !edge.includes('start')
    });
    return [positive, negative];
}

// wibble = split_edges(edges, 'start');
// console.log(wibble);

/**
 * Filter array items based on search criteria (query)
 */
 function filterItems(arr, query) {
    return arr.filter(function(el) {
      return el.include
    })
  }
