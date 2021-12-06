class Seabed {

    constructor() {
        this.vents = new Map();
    }
    /**
     * 
     * @param {array} coords array in the format ['x1, y1', 'x2, y2'] 
     */
    plot_straight_line (coords) {
        // we are only getting straight lines
        console.log('-- Seabed plot_line');
        // console.log(coords);
        let [start, finish] = get_coords(coords);
        // console.log('start', start);
        // console.log('finish', finish);
        
        // check alignment

        if (is_horiz(start, finish)) {
            console.log(`horizontal ${start}, ${finish}`);
            
            // check order
            // horizontal - y stays the same, increase x
            if (start[0] > finish[0]) {
                // change direction
                [start, finish] = swap_ends(start, finish);
                // draw the line from finish to start
            }
            let x1 = start[0];
            let x2 = finish[0];
            let y1 = start[1];
            let y2 = finish[1];
            for (let x = x1; x <= x2; x++) {
                    this.set_point(x,y1);
                }
        } else {
            // vertical
            console.log(`vertical ${start}, ${finish}`);

            // check order
            // vertical - x stays the same, increase y
            if (start[1] > finish[1]) {
                // change direction
                [start, finish] = swap_ends(start, finish);
            }
            let x1 = start[0];
            let x2 = finish[0];
            let y1 = start[1];
            let y2 = finish[1];
            for (let y = y1; y <= y2; y++) {
                    this.set_point(x1,y);
           }
        }
    }

    plot_diagonal_line (coords) {
        /**
         * we are only getting diagonal lines
         * two types: 
         *      x++, y++ - up   /
         *      x++, y-- - down \
         */

         let [start, finish] = get_coords(coords);

         // first get increasing x
         if (start[0] > finish[0]) {
            // change direction
            [start, finish] = swap_ends(start, finish);
            // draw the line from finish to start
        }
        console.log(`diagonal ${start}, ${finish}`);

        // we are done swapping now
        let x1 = start[0];
        let x2 = finish[0];
        let y1 = start[1];
        let y2 = finish[1];

        // now work out if it's up / or down \
        if (start[1] < finish[1]) {
            // up - increasing x
            let y = y1
            for (let x = x1; x <= x2; x++) {
                this.set_point(x,y);
                y++;
            }
        } else {
            // down - decreasing y
            let y = y1
            for (let x = x1; x <= x2; x++) {
                this.set_point(x,y);
                y--;
            }
        }
        
    }


    /**
     * 
     * @param {Int} x 
     * @param {Int} y 
     */
    set_point(x,y) {
        let sq = '(' + x + ',' + y + ')';
        let value = this.vents.get(sq);
            if (value != null) {
                this.vents.set(sq, this.vents.get(sq) + 1);
            } else {
                this.vents.set(sq, 1);
            }
    }


    /**
     * 
     * Render the grid upto max_x, max_y
     * 
     * @param {*} max_x 
     * @param {*} max_y 
     */
    render(max_x, max_y) {
        document.write('<pre>');

        for (let y = 0; y < max_y; y++) {
            for (let x = 0; x < max_x; x++) {
                let sq = '(' + x + ',' + y + ')';
                let value = this.vents.get(sq);
                if (value != null) {
                    document.write(value);
                } else {
                    document.write('.');
                }
                
            }
            document.write('<br/>');
        }
        document.write('</pre>');

    }
}

function get_coords(coords) {
    let x1, x2, y1, y2;
    [x1,y1] = coords[0].split(',').map(x => parseInt(x));
    [x2,y2] = coords[1].split(',').map(x => parseInt(x));

    return [[x1,y1] ,[x2,y2]]
}

/**
 * 
 * @param {array} coords 
 * 
 * returns array of [start, finish] ordered for plotting
 */
function order_points(coords) {
    console.log(`order points got these coords`);
    console.log(coords);
    return coords;
}

function is_horiz(start, finish) {
    // returns true if line is horizontal
    // console.log(`--- is_horiz with ${start}, ${finish}`);
    // console.log(start);
    // console.log(finish);
    return (start[1] == finish[1]);
}

function swap_ends(start, finish) {
    return ([finish, start]);
}