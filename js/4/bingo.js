class Bingo {

    /**
     * 
     * @param {string} startNumbers 
     */
    constructor (startNumbers) {
        this.numbers = createBingoGrid(startNumbers);
        this.win = false;
        this.marked = createBingoGrid(`0 0 0 0 0
        0 0 0 0 0
        0 0 0 0 0
        0 0 0 0 0
        0 0 0 0 0`);
        this.numbers_marked = 0;
        this.last_ball = 0;
    }

    play(ball) {
        console.log('playing ball ' + ball);
        this.last_ball = ball;
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (this.numbers[i][j] == ball) {
                    console.log(`found ball ${ball}`);
                    console.log(i,j);
                    this.marked[i][j] = 1;
                    this.numbers_marked++;
                }
            }
        }
    }

    /**
     * are there any lines complete?
     */
    check() {
        // check rows and cols
        
        for (let i = 0; i < 5; i++) {
            let row_score = 0;
            let col_score = 0;
            for (let j = 0; j < 5; j++) {
                row_score += this.marked[i][j];
                col_score += this.marked[j][i];
                
            }   
            // console.log("row_score", row_score);  
            // console.log("col_score", col_score);
            
            if (col_score == 5 || row_score == 5) {
                this.win = true;
            }
        }
        
        return this.win;
    }

    score() {
        if (this.win) {
            // calculate score

            let unmarked = 0;
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 5; j++) {
                    // console.log(`scoring ${i},${j}`);
                    // console.log(i,j);
                    // console.log(this.marked[i][j]);
                    if (this.marked[i][j] == 0) {
                        unmarked += this.numbers[i][j];
                    }
                }    
            }
            // console.log(`unmarked ${unmarked}`);
            return this.last_ball * unmarked;
        } else {
            return -1;
        }
    }
}


/**
 * 
 * @param {string} startNumbers
 *  a string of 5 rows of 5 numbers, separated by 1 or more spaces
 */
function createBingoGrid(startNumbers) {
    let returns = [];
    let rows = startNumbers.split(/\n/);
    // gDEBUG && console.log('rows', rows);

    rows.forEach(row => {
        // trim any leading space
        let cells = row.trim().split(/\s+/).map(x => parseInt(x));
        returns.push(cells);
    });

    // gDEBUG && console.log('returns', returns);
    return returns
}