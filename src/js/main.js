// Game must:
// [ ] Only one disc moved at a time 
// [ ] Every move takes top disc from one stack and places on top of another
// [ ] No disc can be put on top of a smaller disc

// Bonus:
// [ ] Time based scoring
// [ ] Track scores across games (even when reloading)

// Variables
var holding = [],
	disksNum = 3,
	$board = $('.board'),
	$restart = $board.find('.restart'),
	$tower = $board.find('.tower');

// Start Game
function gameStart(tower) {
	$tower.html('');
	holding = [];
	for (var i = 1; i <= disksNum; i++) {
	tower.prepend($('<li class="disk disk-' + i + '" data-value="' + i + '"></li>'));
	}
}

function tower(tower) {
    var $topDisk = tower.find(':last-child'),
        topDiskValue = $topDisk.data('value'),
        $holdingDisk = $board.find('.hold');

    if ($holdingDisk.length !== 0) {
        if (topDiskValue === holding[0]) {
            $holdingDisk.removeClass('hold');
        } else if (topDiskValue === undefined || topDiskValue > holding[0]) {
            $holdingDisk.remove();
            tower.append($('<li class="disk disk-' + holding[0] + '" data-value="' + holding[0] + '"></li>'));
            countMove();
        }
    } else if ($topDisk.length !== 0) {
        $topDisk.addClass('hold');
        holding[0] = topDiskValue;
    }
}

gameStart($tower.eq(0));

// Click Events Ahoy

$board.on('click', '.tower', function(){
    var $this = $(this)
    tower($this)
})

