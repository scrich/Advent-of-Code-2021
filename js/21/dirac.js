class Dirac {

    constructor(start_string) {
        let setup = start_string.split(' starting position: ');
        this.label = setup[0];
        this.space = parseInt(setup[1]);
        this.score = 0;
    }

    move(diceroll) {
        // console.log('diceroll');
        // console.log(`started on ${this.space}`);
        this.space = (this.space + diceroll -1)%10 +1
        // console.log(`ended on ${this.space}`);
        this.score += this.space;
        // console.log(`score is ${this.score}`);
        return this.isWinner();
    }

    isWinner() {
        return this.score >= 1000;
    }
}


class Dice {

    constructor() {
        this.last = 0;
    }

    getNext() {
        // console.log(`getNext last was ${this.last}`);
        return this.last = this.last%100 + 1

    }

    roll(rolls) {
        let dicethrow = 0;
        for (let i = 0; i < rolls; i++) {
            dicethrow += this.getNext();
            
        }
        console.log(`returning ${dicethrow}`);
        return dicethrow;
        
    }
}