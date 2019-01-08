// Game must:
// [ ] Only one disc moved at a time 
// [ ] Every move takes top disc from one stack and places on top of another
// [ ] No disc can be put on top of a smaller disc

// Bonus:
// [ ] Time based scoring
// [ ] Track scores across games (even when reloading)

// list variables

var $board = $('.board'),
    $tower = $board.find('.tower'),
    $t1 = $('#t1'),
    $t2 = $('#t2'),
    $final = $('#t3')

var hanoi = {
    rings: 3,
    moves: 0,

}

// game init

$tower.click(function(){
    $tower.prepend('#disc1')
})