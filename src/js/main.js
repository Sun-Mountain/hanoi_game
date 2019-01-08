// set up - variables

var $tower = document.getElementsByClassName('tower')

// click event - move from one pole to another

$( init );

function init() {

 // Move the disc from #t1 to #t2 and #t3
  $('#t2, #t3').append( $('#t1>#disc1') );
}


// win scenario