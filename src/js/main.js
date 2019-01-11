// Game must:
// [x] Only one disc moved at a time
// [x] Every move takes top disc from one stack and places on top of another
// [x] No disc can be put on top of a smaller disc

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
  function buildTower(tower) {
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
      buildTower($tower.eq(0))
    }
  });

  $(".sub").click(function() {
    if (discNum > 3) {
      discNum--;
      buildTower($tower.eq(0))
    }
  });

  //Create Game

  buildTower($tower.eq(0));

  // Logic

  function play(tower) {
    var $discs = tower.children(), /* list items */
        $smallest = tower.find(":last-child"),
        selectedDiscId = $smallest.data("value"),
        $onDeck = $board.find(".hold");

    /* If there is a disc to be selected */
    if ($onDeck.length !== 0) { 
        // if there is a disc already selected
      if (selectedDiscId === deck[0]) {
        // deselect disk 
        $onDeck.removeClass("hold");
        // else if selectedDisc is < last child in new tower
      } else if (selectedDiscId === undefined || selectedDiscId >= deck[0]) {
          // remove disc from original tower
          $onDeck.remove();
          // if selected disc is smaller than top disc in the destination tower
          // recreate identical disc in new tower 
          tower.append($('<li class="disc disc-' + deck[0] + '" data-value="' + deck[0] + '"></li>'))
      }

      //if no disc is selected
    } else if ($smallest.length !== 0) {
      $smallest.addClass("hold");
      deck[0] = selectedDiscId;
    }
    
  }

  // Click Events Ahoy

  $board.on("click", ".tower", function() {
    var $selectedTower = $(this);
    play($selectedTower);
  });

  $(".reset").click(function() {
    // discNum = 3;
    buildTower($tower.eq(0));
  });
});