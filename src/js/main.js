// Game must:
// [ ] Only one disc moved at a time 
// [ ] Every move takes top disc from one stack and places on top of another
// [ ] No disc can be put on top of a smaller disc

// Bonus:
// [ ] Time based scoring
// [ ] Track scores across games (even when reloading)

// list variables

var $tower = $('.tower'),
    $t1 = $('#t1'),
    $t2 = $('#t2'),
    $final = $('#t3')

// game init

$tower.click(function(){
    $tower.prepend('#disc1')
})