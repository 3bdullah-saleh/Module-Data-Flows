const films = [{
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
}, {
  title: "Typist Artist Pirate King",
  director: "Carol Morley",
  times: ["15:00", "20:00"],
  certificate: "12A",
  duration: 108,
}];
// Goal: How to use film card component with an array of films

// How can we reuse functionality?

function createFilmCard(film) {
  const filmCard = document
    .getElementById("film-card-template")
    .content.cloneNode(true);

  filmCard.querySelector("h3").textContent = film.title;
  filmCard.querySelector("p").textContent = film.director;

  return filmCard;
}

// How we go through the array of films and create a card for each element

for (const film of films) {
  const card = createFilmCard(film);
  document.body.appendChild(card)
}