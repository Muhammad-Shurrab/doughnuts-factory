/*!
 * Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  //  Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

let userName = prompt("Enter Your name Please");
function gender() {
  let gender = prompt("Enter Your Gender Please");
  while (gender != "male" && gender != "female") {
    gender = prompt("Please Enter a correct gender");
    if (gender == "male" && gender == "female") break;
  }
  if (gender == "male") {
    alert("Welcome " + "Mr." + userName);
  } else if (gender == "female") {
    alert("Welcome " + "Ms." + userName);
  }

  // else if(gender != "male" && gender != "female")
  else {
    // Without expression
    alert("Welcome " + userName);
  }
}

gender();
let order = confirm("Do you want order , Donuts , Ice-cream , Coffee , Bakery");
if (order == true) {
  var c = prompt("Pick what you want?");
  alert(c + " Is preparing");
  console.log(userName + " " + c);
} else {
  alert("Thanks for Visit!");
}
let i = [userName, gender, c];

let total = ""; // text = "bmw<br>" + "volvo<br>" "ford<br>"
for (x of i) {
  total += x + "\n";
}

console.log(total);

let test = document.getElementById("test");
let sec = document.createElement("div");
let cont = document.createElement("div");
let uname = document.createElement("p");
let info = document.createElement("ol");
let useri = document.createElement("li");

console.log(sec);
console.log(uname);
// console.log(userName);
console.log(info);
console.log(useri);

test.appendChild(sec);
cont.appendChild(uname);
uname.innerHTML = userName;
uname.appendChild(info);
info.appendChild(useri);
console.log(uname);
