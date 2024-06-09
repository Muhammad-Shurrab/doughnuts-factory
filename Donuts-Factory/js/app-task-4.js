let listItems = document.createElement("li");

let imgs = [
  "/doughnuts-factory/Fuits/banana.jpg",
  "/doughnuts-factory/Fuits/Ananas.jpg",
  "/doughnuts-factory/Fuits/Farawlla.jpg",
  "/doughnuts-factory/Fuits/grape.jpg",
  "/doughnuts-factory/Fuits/orange.jpg",
];

let fruits = [listItems, listItems, listItems, listItems, listItems];

for (let i = 0; i < fruits.length; i++) {
  let images = document.createElement("img");
  images.src = imgs[i];
  images.style.width = "100px";
  images.style.display = "block";
  fruits[i].appendChild(images);

  document.getElementById("fruits-list").appendChild(fruits[i]);
}

// Q2

function numberChecker()
