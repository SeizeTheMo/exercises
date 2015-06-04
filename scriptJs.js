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

/**
 * chapter 3 functions 
 */
function findMin(num1, num2) {
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

/**
 * chapter 4
 * The sum of a range
 */
function range(start, end, step) {
  var tab = [];
  
  (!step) ? step = 1 : step = step;
  
  if (step > 0) {
  
    for (var i = start; i <= end; i += step)
	  tab.push(i);
  } else {
      
    for (var i = start; i >= end; i += step)
      tab.push(i);
    }
  
  return tab;
}

function sum(tab) {
  var sum = 0;
  
  for (var i = 0; i < tab.length; i++) {
    sum += tab[i];
  }
  
  return sum;
}

/**
 * reverse array
 */
function reverseArray(tab) {
  var newTab = [];
  
  for (var i = tab.length - 1; i >= 0; i--) {
    newTab.push(tab[i]);
  }
  
  return newTab;
}

/**
 * it modifies the array given as argument in order to reverse its elements.
 */
function reverseArrayInPlace(tab) {
  var maxIndex = tab.length - 1;
  
  for (var i = 0; i < Math.floor(tab.length / 2); i++) {
    var tmp = tab[maxIndex - i];
    tab[maxIndex - i] = tab[i];
    tab[i] = tmp;
  }
  
  return tab;
}

/*
 * A list
 */
function arrayToList(tab) {
  var list = null;
  
  for (var i = tab.length - 1; i >= 0; i--)
    list = {value: tab[i], rest: list};
  
  return list;
}

function listToArray(list) {
  var tab = [];
  
  for (var i = list; i; i = i.rest)
    tab.push(i.value);
  return tab;
}

function prepend(value, list) {
  return {value: value, rest: list};
}

function nth(list, n) {
  if (!list)
    return undefined;
  
  else if (n == 0)
    return list.value;
  
  else
  return nth(list.rest, n - 1);
}


/**
 * deep compare
*/
function deepEqual(objOne, objTwo) {
  if (objOne === objTwo) 
    return true;
	  
  if (objOne == null || typeof objOne != "object" ||
	  objTwo == null || typeof objTwo != "object")
    return false;
	  
  var argCountInOne = 0; 
  var argCountInTwo = 0;

  for (var arg in objOne)
    argCountInOne += 1;

  for (var arg in objTwo) {
    argCountInTwo += 1;
    if (!(arg in objOne) || !deepEqual(objOne[arg], objTwo[arg]))
        return false;
  }
  
 return argCountInOne == argCountInTwo;
}

function getObj() {
  var obj = {here: 1, object: 2};
 
  return obj;
}

