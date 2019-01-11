# Tower of ~~Death~~ Hanoi

## What Is This?
First project of General Assembly's Web Development Intensive: Create a game using HTML, CSS, and JavaScript. I chose the [Tower of Hanoi](https://en.wikipedia.org/wiki/Tower_of_Hanoi). A game with three towers or rods and a minimum of three discs stacked from largest to smallest.

__Game Requirements:__

:ballot_box_with_check: Only one disc moved at a time.

:ballot_box_with_check: Every move takes top disc from one stack and places on top of another.

:ballot_box_with_check: No disc can be put on top of a smaller disc.

__Bonuses:__
* Add timer-based scoring. :x:
* Track scores across games (even if the page is reloaded). :x:

__Extras:__
* Can add discs with a maximum of 7 :ballot_box_with_check:
* Can remove discs with a minimum of 3 :ballot_box_with_check:

## Technology Used: jQuery instead of Javascript
Initially, the plan was to utilize HTML, CSS, and Javascript that we had been learning over the past three weeks in our web intensive. However, after discovering some (deceptively) easy code featuring jQuery--a language we have not and will not go over in class--I decided to pursue jquery as my DOM manipulator of choice.

## Approach Taken
After browsing the internet for useful code for this project, I found that you can create and use @for loops in SASS.

    @for $i from 1 through 7 {
        .disc-#{$i} {
            width: 20px * $i;
            background-color: $pink;
        }
    }

Source: http://thesassway.com/intermediate/if-for-each-while

With a handy little function written in jQuery:

    tower.prepend($('<li class="disc disc-' + i + '" data-value="' + i + '"></li>'));

Source: http://api.jquery.com/prepend/

This seemed perfect for setting up buttons to add and subtract discs to increase or decrease the difficulty level.

What ended up happening is a lot of extra work in translating javascript into jquery and jquery specific methods. The methods, when they worked, were much simpler to write. However, sometimes the logic did not exactly work the way I wanted it to.

I consulted a friend who works as a webdeveloper specializing in javascript. In addition to helping me with my logic, her major note was that name naming of variables and functions needed to say what they are/do. I had named them vaguely and therefore and to go back and forth to remember what they did/responded to.

After trial and error, I was able to get a working version of the game that I liked.

Jimmy helped me with my final goal (being able to add and subtract )

## Play The Game
![ScreenShot](https://sun-mountain.github.io/hanoi_game/)

https://sun-mountain.github.io/hanoi_game/

## Unsolved Problems
Sometimes, when the player clicks too fast, it breaks the game to where you can't deselect the top disc immediately and then changes the width of future selected disc. Only fix currently is to refresh the page which will restart the game, forgetting all progress.

## For The Future
* Make game layout mobile responsive. :o:
* Add move counter. :o:
* Add win scenario. :o:
* Add timer. :o: