// Game must:
// [ ] Only one disc moved at a time 
// [ ] Every move takes top disc from one stack and places on top of another
// [ ] No disc can be put on top of a smaller disc

// Bonus:
// [ ] Time based scoring
// [ ] Track scores across games (even when reloading)

// list variables

var onDeck = [],
    discNum = 3,
    $board = $('.board'),
    $tower = $board.find('.tower')

const disc1 = document.querySelector('#d1')

// console.log($board)
// console.log($tower)

// game init

disc1.addEventListener('click', onDeck)
function onDeck() {
    document.body.style.backgroundColor = $lime;
}

