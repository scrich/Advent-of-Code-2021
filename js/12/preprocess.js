let route_segments = input.split(/\n/);
console.log(route_segments);

let edges = [];

route_segments.forEach(element => {
    edges.push(element.split('-'))
});

console.log(edges);
