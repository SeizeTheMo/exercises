/**
 * 
 */

function draw() {
	var max = 8;

	var chess = "";

	for (var i = 0; i < max; i++) {
	  for (var j = 0; j < max; j++) {
	    if ((i + j)%2 == 0)
	      chess += " ";
	    else
	      chess += "#";
	  }
	  chess += "\n";
	}
	return chess;
}