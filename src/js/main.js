// Game must:
// [ ] Only one disc moved at a time 
// [ ] Every move takes top disc from one stack and places on top of another
// [ ] No disc can be put on top of a smaller disc

// Bonus:
// [ ] Time based scoring
// [ ] Track scores across games (even when reloading)

$(document).ready(function() {

// Variables
var deck = [],
    discNum = 3,
	$board = $('.board'),
    $tower = $board.find('.tower');

// Increase/Decrease discNum (not working?)

$('.ad').click(function() {
    discNum++
    console.log(discNum)
})

$('.sub').click(function() {
    discNum--
    console.log(discNum)
})

// Start Game
function gameStart(tower) {
	$tower.html('');
	for (i = 1; i <= discNum; i++) {
	tower.prepend($('<li class="disc disc-' + i + '" data-value="' + i + '"></li>'));
    }
}

gameStart($tower.eq(0));

// Logic

function tower(tower) {
    var $top = tower.find(':last-child'),
        topDiskValue = $top.data('value'),
        $onDeck = $board.find('.hold');

    if ($onDeck.length !== 0) {
        if (topDiskValue === deck[0]) {
            $onDeck.removeClass('hold');
        }
    } else if ($top.length !== 0) {
        $top.addClass('hold');
    }

    console.log(topDiskValue)
}

// Click Events Ahoy

$board.on('click', '.tower', function(){
    var $x = $(this)
    tower($x)
})

$('.reset').click(function() {
    gameStart($tower.eq(0));
})

})