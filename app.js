let userName = prompt("Enter Your name Please");
let gender = prompt("Enter Your Gender Please");
if (gender == "male") {
  alert("Welcome" + "Mr." + userName);
} else if (gender == "female") {
  alert("Welcome" + "Ms" + userName);
}

// else if(gender != "male" && gender != "female")
else {
  // Without expression
  alert("Welcome " + userName);
}
