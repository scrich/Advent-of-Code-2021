let paths = [];
dfs('start', [], paths)
console.log(paths);

function dfs(node, visited, paths) {
    visited.push(node);
    if (node == 'end') {
        paths.push(visited.join(','))
        return;
    }

    for (const neighbour of graph[node]) {
        if (isSmallCave(neighbour) && visited.includes(neighbour)) {
            continue;
        }
        dfs(neighbour, [...visited], paths);
    }
}

/**
 * 
 * @param {String} cave 
 * @returns Boolean
 */
function isSmallCave(cave) {
    return cave.toLowerCase() == cave
}