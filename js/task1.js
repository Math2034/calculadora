// Version 2.0
// Portoflio Assignment Task 1
/*Create a special calculator that read a number from the user, checks that it is an integer and performs a series of mathematical calculations as listed:
Calculate the square and cube of the number. A number squared is a number that is multiplied by itself; e.g., 22 is equal to 4 (2 * 2). A number cubed is a number that is multiplied by itself twice e.g., 23 is equal to 8 (2 * 2 * 2). 
calculates the number's factorial. A factorial is the product of an integer and all the integers below it; e.g., the factorial of 4 is equal to 24 (4 * 3 * 2 * 1).
*/

function factorial(n) {
  if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function cubed(n){
  return n * n * n
}

function squared(n){
  return n*n
}

function calculate(){

  const numberInput = document.getElementById("number");
  const number = parseInt(numberInput.value);

  document.getElementById('factorial').value = factorial(number)
  document.getElementById('squared').value = squared(number)
  document.getElementById('cubed').value = cubed(number)

	
// End of calculate() function.
}

document.getElementById("calculate").addEventListener("click", calculate);

function init(){

    var theForm = document.getElementById('theForm')
    theForm.onsubmit = calculate;

  // End of init() function.
}

window.onload = init;
