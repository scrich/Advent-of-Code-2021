
let unvisted = []
let stack = []

let results = []

// https://www.programiz.com/dsa/graph-dfs

// init

// call DFS on all linked nodes from start
// nodes.get('start').edges.forEach(element => {
//     console.log(`initiating with ${element}`);
//     result = DFS(['start'], element, ['start'])
//     results.push(result);
// });

DFS(results,'start',[])

console.log(results);

/**
 * 
 * @param {Array} paths
 * @param {String} node 
 * @param {Array} visited 
 */
function DFS(paths, node, visited) {
    /**
     * Mark the current node as visited and print the node.
     * Traverse all the adjacent and unmarked nodes and 
     * call the recursive function with the index of the adjacent node.
     */
    visited.push(node);
    if (node == 'end') {
        // console.log(`we are finishing at ${node} from ${visited}`);
        paths.push(visited.join(','));
        return;
    }
    
    for (const neighbour of graph[node]) {
        // console.log(`checking neighbour ${neighbour} against visited ${visited}`);
        if (isSmallCave(neighbour) && visited.includes(neighbour)) {
            // console.log(`don't visit neighbour ${neighbour}`);
            continue;
        }
        DFS(paths, neighbour, [...visited])
    }
    
}

console.log('we have finished part 1');


function isSmallCave(cave) {
    return cave.toLowerCase() == cave
}