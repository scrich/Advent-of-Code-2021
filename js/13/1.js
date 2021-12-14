// advent of code
// https://adventofcode.com/2021/

let paper = [];
let paper_folded = [];
let max_x, max_y;

function coords(xyrow) {
    let coords = xyrow.split(',');
    return [parseInt(coords[0]), parseInt(coords[1])]
}

function get_max (prev, curr) {
    xy = coords(curr);
    let max_x, max_y;
    xy[0] > prev[0] ? max_x = xy[0] : max_x = prev[0];
    xy[1] > prev[1] ? max_y = xy[1] : max_y = prev[1];
    return [max_x, max_y]
}

let max_xy = dots.reduce(get_max, [0,0]);
max_x = max_xy[0] + 1;
max_y = max_xy[1] + 1;

// get max x and max y
paper = make2DArray(max_x, max_y); 

for (let x = 0; x < max_x; x++) {
    for (let y = 0; y < max_y; y++) {
        paper[x][y] = 0;
    }
}



// put the dots on a map

dots.forEach(dot => {
    console.log(dot);
    let x = coords(dot)[0];
    let y = coords(dot)[1];
    paper[x][y] = 1;
})
// render(paper);
// fold it along the line

for (let f = 0; f < folds.length; f++) {
// for (let f = 0; f < 1; f++) {
    const row = folds[f];
    console.log(row);
    // eg fold along y=7
    const fold = row.replace('fold along ','').split('=');
    console.log(fold);

    if (fold[0] == 'y') {
        // it's a y fold
        let fold_line = fold[1];
        paper_folded = make2DArray(paper.length, paper[0].length - fold_line -1);
        console.log(paper_folded);

        for (let x = 0; x < paper_folded.length; x++) {
            for (let y = 0; y < paper_folded[0].length; y++) {
                paper_folded[x][y] = paper[x][y] || paper[x][2*fold_line-y];
            }
        }

        // render(paper_folded)
    } else {
        // it's an x fold

        // DRY!
        
        let fold_line = fold[1];
        console.log('x fold');
        // console.log(paper);
        // render(paper);
        paper_folded = make2DArray(paper.length - fold_line -1, paper[0].length);
        console.log(paper_folded);

        for (let x = 0; x < paper_folded.length; x++) {
            for (let y = 0; y < paper_folded[0].length; y++) {
                paper_folded[x][y] = paper[x][y] || paper[2*fold_line-x][y];
            }
        }

        // render(paper_folded)
    }

    // reset the arrays for the next fold
    // console.log(paper_folded);
    paper = paper_folded.slice();
    // console.log(paper);
    paper_folded = []
    // console.log(paper);
}
renderchars(paper);

// work out which line


// work out where the dots are#

function render (array) {
    document.write('<pre>');
    let count_dots = 0;
    for (let y = 0; y < array[0].length; y++) {
        for (let x = 0; x < array.length ; x++) {
            document.write (array[x][y])
            count_dots += array[x][y];
        }
        document.write('\n');
    }
    document.write('</pre>');
    console.log(`I counted ${count_dots} dots`);
}

function renderchars (array) {
    document.write('<pre>');
    let count_dots = 0;
    for (let y = 0; y < array[0].length; y++) {
        for (let x = 0; x < array.length ; x++) {
            if (array[x][y] == 1 ) {
                document.write('#');
            } else {
                document.write('.');
            }
            
            count_dots += array[x][y];
        }
        document.write('\n');
    }
    document.write('</pre>');
    console.log(`I counted ${count_dots} dots`);
}

function make2DArray(cols, rows) { 
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }
    return arr;
  }