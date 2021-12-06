const lines = input.split(/\n/);

const coord_array = lines.map(x => {
   return x.split(" -> ");
})

console.log(coord_array);

const straight_lines = coord_array.filter(x => {
    let [start, finish] = [
        x[0].split(','), 
        x[1].split(',')];
    // console.log(start, finish);
    return (
        (start[1] == finish [1]) 
        ||
        (start[0] == finish[0])
        );
});

console.log('straight lines',straight_lines);

const diagonal_lines = coord_array.filter(x => {
    let [start, finish] = [
        x[0].split(','), 
        x[1].split(',')];
    // console.log(start, finish);
    return (
        (start[1] != finish [1]) 
        &&
        (start[0] != finish[0])
        );
});

console.log('diagonal lines', diagonal_lines);