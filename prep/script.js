const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};
console.log("hello world")

// Goal: render the title a the film card in the user interface.

// create a film card (section) 
// create a title element 
// append title to that film card
// append film card to the DOM

const filmCard = document.createElement("section");
const title = document.createElement("h1");
const director = document.createElement("p");

filmCard.appendChild(title);
filmCard.appendChild(director);
title.textContent = film.title;
director.textContent = film.director;

document.body.appendChild(filmCard)


