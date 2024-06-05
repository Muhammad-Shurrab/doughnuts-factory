// Q2 : Read a number (using prompt) and display it using alert

let read = prompt("Please enter a number?");
alert(read);
// Q3 : Read in two numbers and display them in ascending order.
let a1 = Number(prompt("Please enter a number?"));
let a2 = Number(prompt("Please enter a number?"));

if (a1 < a2) {
  alert(a1 + "," + a2);
} else {
  alert(a2 + "," + a1);
}
// Q4: Read in two numbers and display the larger
let l1 = Number(prompt("Please enter a number?"));
let l2 = Number(prompt("Please enter a number?"));

if (l1 > l2) {
  alert(l1 + "," + l2);
} else {
  alert(l2 + "," + l1);
}
// Q5: Read two numbers and display their sum.
let number1 = +prompt("Please enter a number?");
let number2 = Number(prompt("Please enter a number?"));
let number3 = number1 + number2;
alert(number3);
// Q6: If you have a “Number” variable,  Your task is to print:

// - ONE, if it is equal to 1 .
// - TWO, if it is equal to 2.
// - THREE, if it is equal to 3 .
// - FOUR, if it is equal to 4.
// - FIVE, if it is equal to 5.
// - SIX, if it is equal to 6 .
// - SEVEN, if it is equal to 7.
// - EIGHT, if it is equal to 8.
// - NINE, if it is equal to 9.
// - PLEASE TRY AGAIN, if there is none of the above.
let v = 1;

switch (v) {
  case 1:
    console.log("ONE");
    break;
  case 2:
    console.log("TWO");
    break;
  case 3:
    console.log("THREE");
    break;
  case 4:
    console.log("FOUR");
    break;
  case 5:
    console.log("FIVE");
    break;
  case 6:
    console.log("SIX");
    break;
  case 7:
    console.log("SEVEN");
    break;
  case 8:
    console.log("EIGHT");
    break;
  case 9:
    console.log("NINE");
    break;
  default:
    console.log("PLEASE TRY AGAIN");
}
