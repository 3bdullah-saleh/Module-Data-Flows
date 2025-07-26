const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};
// Goal: Refactor this logic to use a film card template instead.

const filmCard = document
  .getElementById("film-card-template")
  .content.cloneNode(true);

filmCard.querySelector("h3").textContent = film.title;
filmCard.querySelector("p").textContent = film.director;
filmCard.querySelector("p").textContent = film.director;

document.body.appendChild(filmCard);