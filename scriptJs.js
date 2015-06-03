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

function findMin(num1, num2){
	if (num1 == num2)
		return 'rowne - brak min.';
	else {
		if(num1 > num2)
		  return num2;
		else
		  return num1;
	}	
} 

function isEven(number) {
	  if (number == 0)
	    return true;
	  else if (number == 1)
	    return false;
	  else if (number < 0)
	    return isEven(-number);
	  else
	    return isEven(number - 2);
}

function countBs(word) {
	var phrase = String(word), count = 0;
	for (var i = 0; i < phrase.length; i++) {
		if (phrase.charAt(i) == 'B') 
			count++;
	}
	return count;
}

function countChar(word, char) {
	var phrase = String(word), count = 0;
	for (var i = 0; i < phrase.length; i++) {
		if (phrase.charAt(i) == char) 
			count++;
	}
	return count;
}