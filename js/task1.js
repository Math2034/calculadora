// Version 2.0
// Portoflio Assignment Task 1
/*Create a special calculator that read a number from the user, checks that it is an integer and performs a series of mathematical calculations as listed:
Calculate the square and cube of the number. A number squared is a number that is multiplied by itself; e.g., 22 is equal to 4 (2 * 2). A number cubed is a number that is multiplied by itself twice e.g., 23 is equal to 8 (2 * 2 * 2). 
calculates the number's factorial. A factorial is the product of an integer and all the integers below it; e.g., the factorial of 4 is equal to 24 (4 * 3 * 2 * 1).
*/
function calculate(){

  var number = document.getElementById('number').value;
  var factorial = document.getElementById('factorial').value;
  var squared = document.getElementById('squared').value;
  var cubed = document.getElementById('cubed').value;

  // factorial
  squared = Math.pow(number, 2)
  console.log(squared);
	
// End of calculate() function.
}

function init(){

    var theForm = document.getElementById('theForm')
    theForm.onsubmit = calculate;

  // End of init() function.
}

window.onload = init;