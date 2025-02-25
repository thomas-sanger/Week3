const favs = ["Dogs", "Cats", "Horses", "Birds", "Raccoons"]; // create array with elements

const divFavs = document.getElementById("divFavs"); // slect the target ID

const fav_ul = document.createElement("ul"); // create a new <ul> element

favs.forEach((item) => {
  const li = document.createElement("li"); // create a new <li> element
  li.textContent = item; // add text to the <li> element
  divFavs.appendChild(li); // add the <li> element to the <div>
});

const feared = ["Grizzly Bear", "Sharks", "Snakes", "Crocodiles", "Hippos"]; // create array with elements

const divFear = document.getElementById("divFear"); // slect the target ID

const fear_ul = document.createElement("ul"); // create a new <ul> element

feared.forEach((item) => {
  const li = document.createElement("li"); // create a new <li> element
  li.textContent = item; // add text to the <li> element
  divFear.appendChild(li); // add the <li> element to the <div>
});
