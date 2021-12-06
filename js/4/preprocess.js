const gDEBUG = true;

const ball_list = balls
    .split(',')
    .map(x => parseInt(x))
console.log('ball_list',ball_list);

const board_list = boards_input.split(/\n\n/)
// console.log('board_list', board_list);

const boards = board_list.map(element => {
    return new Bingo(element)
});

console.log('boards', boards);
