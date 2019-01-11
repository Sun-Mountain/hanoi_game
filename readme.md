# Tower of ~~Death~~ Hanoi

## What is it
First project of General Assembly's Web Development Intensive: Create a game using HTML, CSS, and JavaScript. I chose the [Tower of Hanoi](https://en.wikipedia.org/wiki/Tower_of_Hanoi). A game with three towers or rods and a minimum of three discs stacked from largest to smallest.

__Game Requirements:__
* Only one disc moved at a time. :ballot_box_with_check:
* Every move takes top disc from one stack and places on top of another. :ballot_box_with_check:
* No disc can be put on top of a smaller disc. :ballot_box_with_check:

__Bonuses:__
* Add timer-based scoring. :x:
* Track scores across games (even if the page is reloaded). :x:

__Extras:__
* You can 

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

This seemed perfect for setting up buttons to add and subtract discs to increase or decrease the difficulty level. (I arbitrarily set the maximum number of discs to seven.)

## Installation Instructions

## Unsolved Problems

## For the Future