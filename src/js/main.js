// Game must:
// [ ] Only one disc moved at a time 
// [ ] Every move takes top disc from one stack and places on top of another
// [ ] No disc can be put on top of a smaller disc

// Bonus:
// [ ] Time based scoring
// [ ] Track scores across games (even when reloading)

$(document).ready(function() {

// Variables
var discNum = 3,
	$board = $('.board'),
    $tower = $board.find('.tower');

// Increase/Decrease discNum

$('#add').click(function (e) {
    e.preventDefault();
    discNum++;
});

// Start Game
function gameStart(tower) {
	$tower.html('');
	for (i = 1; i <= discNum; i++) {
	tower.prepend($('<li class="disc disc-' + i + '" data-value="' + i + '"></li>'));

    }
}

gameStart($tower.eq(0));

// Click Events Ahoy

$board.on('click', '.tower', function(){
    var $this = $(this)
    tower($this)
})

$('.reset').click(function() {
    location.reload()
})

})