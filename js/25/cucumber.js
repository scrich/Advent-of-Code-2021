class Cucumber {
    constructor (direction, row, col) {
        this.dir = direction; // east or south
        this.row = row;
        this.col = col;
        if (this.dir == 'east') {
            this.char = '>'
        } else {
            this.char = 'v'
        }
        this.next_row = this.row
        this.next_col = this.col
    }

    check_next(dir) {
        // see if the space to the right is vacant
        if (dir == 'east') {
            this.check_east();
        } else {
            this.check_south();
        }
    }

    check_south() {
        if (this.row == height-1) {
            // check the top edge
            // console.log('southern cucumber at the bottom');
            if (cucumbers.get(`0,${this.col}`) == 0) {
                // we can move to the top of the col
                this.next_row = 0;
            }
        } else {
            // check the next space to the right
            if (cucumbers.get(`${this.row + 1},${this.col}`) == 0) {
                // we can move the next space down
                this.next_row = this.row + 1;
            }
        }
    }

    check_east() {
        if (this.col == width-1) {
            // check the left edge
            if (cucumbers.get(`${this.row},0`) == 0) {
                // we can move to the start of the row
                this.next_col = 0;
            }
        } else {
            // check the next space to the right
            if (cucumbers.get(`${this.row},${this.col + 1}`) == 0) {
                // we can move the next space to the right
                this.next_col = this.col + 1;
            }
        }
    }

    move() {
        let returns = 0;
        if (this.row != this.next_row || this.col != this.next_col) {
            returns = 1
        } 
        cucumbers.set(`${this.row},${this.col}`, 0);
        cucumbers.set(`${this.next_row},${this.next_col}`, this);
        this.row = this.next_row
        this.col = this.next_col

        return returns; // counter =1 if the cucumber moved
    }
}