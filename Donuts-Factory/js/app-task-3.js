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

let gojo = prompt("Please enter a number");
let reversed = gojo.split("").sort().join("");
alert(reversed);

// Q4 :
//  Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

// Prompt the user for input and store it in the 'num' variable
var num = window.prompt();

// Convert the number to a string and store it in the 'str' variable
var str = num.toString();

// Initialize an array 'result' with the first character of the string
var result = [str[0]];

// Iterate through the characters of the string starting from index 1
for (var x = 1; x < str.length; x++) {
  // Check if the previous and current characters are both even digits
  if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
    // If both are even, push a '-' and the current character to the 'result' array
    result.push("-", str[x]);
  } else {
    // If not both even, push the current character to the 'result' array
    result.push(str[x]);
  }
}

// Output the joined 'result' array as a string
console.log(result.join(""));
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
