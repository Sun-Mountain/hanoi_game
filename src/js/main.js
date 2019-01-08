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

	// Init Game
	function initGame(tower) {
		$tower.html('');
		holding = [];
		for (var i = 1; i <= disksNum; i++) {
			tower.prepend($('<li class="disk disk-' + i + '" data-value="' + i + '"></li>'));
		}
	}
	
	initGame($tower.eq(0));

