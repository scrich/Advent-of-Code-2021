// now we can visit one small cave twice

console.time('part2')
console.log('part 2');
let result2 = []
DFS2(result2, 'start', [])

console.log(result2, result2.length);
// console.log(`looking for 36`);


console.log('part 2 finished');

console.timeEnd('part2')
// part2: 35598.7890625 ms
// without logging part2: 226.888671875 ms

function DFS2(paths, node, visited) {
    /**
     * Mark the current node as visited and print the node.
     * Traverse all the adjacent and unmarked nodes and 
     * call the recursive function with the index of the adjacent node.
     */
    // console.log(`DFS2 with ${node}`);
    visited.push(node);
    if (node == 'end') {
        // console.log(`we are finishing at ${node} from ${visited}`);
        paths.push(visited.join(','));
        return;
    }

    for (const neighbour of graph[node]) {
        // console.log(`checking neighbour ${neighbour} against visited ${visited}`);

        // if (isSmallCave(neighbour) && visited.includes(neighbour)) {

        if (smallCaveVisited(neighbour, visited)) {
            // small cave - one can be visited twice, others once
            /** Specifically, big caves can be visited any number of times, 
             * a single small cave can be visited at most twice, 
             * and the remaining small caves can be visited at most once 
             * 
             */
            // console.log(`don't visit neighbour ${neighbour}`);
            continue;
        }
        DFS2(paths, neighbour, [...visited])
    }

}

function smallCaveVisited(cave, visited) {
    if (cave == 'start') {
        // console.log(`this is the start cave, returning true`);
        return true;
    }
    if (!isSmallCave(cave)) {
        // console.log(`----${cave} is not a small cave, returning false`);
        return false;
    }
    let times_visited = visited.filter(x => x == cave).length;
    // console.log(`small cave visited checking ${cave} in ${visited}. Visits: ${times_visited}`)
    // return isSmallCave(cave) && visited.includes(cave)
    // return isSmallCave(cave) && times_visited == 1

    // check total small caves visited that are not start or end

    let small_caves = visited.filter(x => isSmallCave(x)).filter(x => x != 'start')
    // console.log(`small caves visited ${small_caves}`);
    // check if any other cave has been visited twice
    let other_small_caves = new Set(small_caves.filter(x => x != cave)); // unique
    // console.log(`other small caves`,other_small_caves);
    let dupe = false;
    let counts = [...other_small_caves].map(x => {
        return small_caves.filter(y => y == x).length
    });
    // console.log(counts);
    if (counts.includes(2)) {
        // console.log(`checking ${cave} another cave has been visited twice and times visited for this cave is ${times_visited}`);
        if (times_visited == 1) {
            return true
        }

    }

    // console.log(dupe);


    return times_visited == 2

}


