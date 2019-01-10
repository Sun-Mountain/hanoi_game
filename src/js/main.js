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
      $board = $(".board"),
      $tower = $board.find(".tower");

  // Start Game
  function gameStart(tower) {
    $tower.html("");
    for (i = 1; i <= discNum; i++) {
      tower.prepend(
        $('<li class="disc disc-' + i + '" data-value="' + i + '"></li>')
      );
    }
  }

  // Increase/Decrease discNum (not working?)

  $(".ad").click(function() {
    if (discNum < 7) {
      discNum++;
      return discNum;
    }
  });

  $(".sub").click(function() {
    if (discNum > 3) {
      discNum--;
      return discNum;
    }
  });

  //Create Game

  gameStart($tower.eq(0));

  // Logic

  function play(tower) {
    var $disc = tower.children(), /* list items */
        $smallest = tower.find(":last-child"),
        selectedDiscId = $smallest.data("value"),
        $onDeck = $board.find(".hold");

    /* If there is a disc to be selected */
    if ($onDeck.length !== 0) { 
      /* If selected a disc */
      if (selectedDiscId === deck[0]) { 
        $onDeck.removeClass("hold"); /* deselecting a disc */
        // console.log(tower)
      } else if (selectedDiscId < /* select board/tower/id last child */ ) { /* evaluates parameter's value */
          // remove disc from original tower
          // console.log($smallest)
          // console.log(selectedDiscId)
          $smallest.remove()
          console.log($smallest)
          // if selected disc is smaller than top disc in the destination tower
          // recreate identical disc in new tower 
      }
    } else if ($smallest.length !== 0) {
      $smallest.addClass("hold");
      selectedDiscId = deck[0];

      console.log(tower)
    }
  }

  // Click Events Ahoy

  $board.on("click", ".tower", function() {
    var $selectedTower = $(this);
    play($selectedTower);
  });

  $(".reset").click(function() {
    gameStart($tower.eq(0));
  });
});
