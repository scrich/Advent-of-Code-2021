// go through all the edges and record them in nodes

// first get a list of all the nodes.
// Or do we need to?

let nodes = new Map();

// set up the nodes
edges.forEach(element => {
    let A = element[0];
    let B = element[1];

    if (!nodes.has(A)) {
        nodes.set(A, new Node(A))
    } 
    if (!nodes.has(B)) {
        nodes.set(B, new Node(B))
    } 

    nodes.get(A).addEdge(B);
    nodes.get(B).addEdge(A);

});



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

console.log('we have finished');


function split_segment(edge) {
    return edge.split('-');
}