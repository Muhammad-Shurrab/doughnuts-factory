//Q1 :Write a JavaScript function that reverses a number.

// let gojo = prompt("Please enter a number");
// let reversed = gojo.split("").reverse().join("");
// alert(reversed);

// Q2 :
//   Use a loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the console .

// Example  :
// "0 is even"
// "1 is odd"

// for (nem = 0; nem <= 15; nem++) {
//   if (nem % 2) {
//     console.log(nem + " EVEN");
//   } else if ((nem = 0)) {
//     console.log(nem + " EVEN");
//   } else {
//     console.log(nem + "ODD");
//   }
// }

// Q3 :
// Write a function that returns a string that has letters in alphabetical order.
// Example string : 'Orange'
// Expected Output : 'aegnor'
// Assume punctuation and numbers symbols are not included in the passed string.

// let gojo = prompt("Please enter a number");
// let reversed = gojo.split("").sort().join("");
// alert(reversed);

// Q5:
// Write a function (Agechecker) that checks age of the user if the age is larger than or equal 18, the output will be ( The user is Adult ) else ( The user is Minor)
// Use ternary operator

function ageChecker(age) {
  //   if (age >= 18) {
  //     alert("The user is Adult");
  //   } else {
  //     alert("The user is Minor");
  //   }
  age >= 18 ? alert("The user is Adult") : alert("The user is Minor");
}
ageChecker(prompt());
