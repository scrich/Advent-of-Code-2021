// advent of code
// https://adventofcode.com/2021/day/4

// play
let winner = false; // true when there is a winner


// take the next number

// DEBUG
temp_ball_list = [7,4,9,5,11,17,23,2,0,14,21,24];

console.log(ball_list);

// ball_list.forEach(ball => {
for (let ball of ball_list) {
    let gameover = false;
    console.log(`It's number ${ball}`);
    for (let i = 0; i < boards.length; i++) {
        const board = boards[i];
        console.log(`--- playing ball ${ball} with board ${i}`);
        // console.log(board);
        board.play(ball)

        console.log(`--- checking ball ${ball} with board ${i}`);
        // console.log(board);
        if (board.check()) {
            console.log(`Board ${i} has won`);
            document.write(board.score());
            gameover = true;
            break;
        }
        if (gameover) {break;}
    }
    if (gameover) {break;}
};

console.log(`end`);

// console.log(boards);

