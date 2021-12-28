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
//
// set visited

nodes.forEach((value, key) => {value.visited = false});

// now start
let routes = [];
routes.push( route_to_end('A'));
console.log('routes',routes);

function route_to_end(begin) {
    let path = begin;
    if (begin == 'end') {
        console.log(`we are at the end`);
        return path;
    } else {
        let to_visit = [];
        nodes.get(begin).edges.forEach(edge => {
            to_visit.push(edge);
        });
        console.log(`${begin} can visit ${to_visit}`);
        to_visit.forEach(node => {
            if (node != 'start') {
                if (!nodes.get(node).visited) {
                    console.log(`visiting ${node} from ${begin}`);
                    nodes.get(node).visit();
                    path = path + ',' + route_to_end(node);
                }
            }
        });
    }
    return path;
}

// nodes.get('start').edges.forEach(edge => {
//     console.log(`start, ${edge}`);
// });