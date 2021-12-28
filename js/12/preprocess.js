let graph = {};

input.split(/\n/).map(x => {
    const [from, to] = x.split('-')
    console.log(from, to);
    if (!graph[from]) {
        graph[from] = []
    }
    if (!graph[to]) {
        graph[to] = []
    }
    graph[to].push(from);
    graph[from].push(to);
})
// console.log(route_segments);

console.log(graph);
