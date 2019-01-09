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

// Start Game
function gameStart(tower) {
	$tower.html('');
	for (i = 1; i <= discNum; i++) {
	tower.prepend($('<li class="disc disc-' + i + '" data-value="' + i + '"></li>'))
    }
}

// Increase/Decrease discNum (not working?)

$('.ad').click(function() {
    if (discNum < 7) {
        discNum++
        return discNum
    }
})

$('.sub').click(function() {
        if (discNum > 3) {
        discNum--
        return discNum
    }
})

//Create Game

gameStart($tower.eq(0))

// Logic

function tower(tower) {
    var $movement = tower.children(),
        $top = tower.find(':last-child'),
        topDisc = $top.data('value'),
        $onDeck = $board.find('.hold');

    if ($onDeck.length !== 0) {
        if (topDisc === deck[0]) {
            $onDeck.removeClass('hold')
        } else if (topDisc === undefined || topDisc > deck[0]) {
            $onDeck.remove()
            
        }
    } else if ($top.length !== 0) {
        $top.addClass('hold')
		deck[0] = topDisc
    }
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