// To fetch data from a server:
// Begin with an empty state
const state = {
  films: [],
  searchTerm: "",
};

function fetchFilms() {
  return fetch(
    "https://programming.codeyourfuture.io/dummy-apis/films.json"
  ).then(function (data) {
    return data.json();
  });
}

fetchFilms().then(function (films) {
  state.films = films
});
console.log(state, "<----- after fetching")

function createFilmCard(film) {
  const filmCard = document
    .getElementById("film-card-template")
    .content.cloneNode(true);

  filmCard.querySelector("h3").textContent = film.title;
  filmCard.querySelector("p").textContent = film.director;

  return filmCard;
}

function render() {
  // map out the films and filter based on searchTerm at the same time

  // filtering the films
  const filteredFilms = state.films.filter(function (film) {
    // compare searchTerm with the film title;
    return film.title.includes(state.searchTerm);
  });

  const filmCards = filteredFilms.map(createFilmCard);

  document.getElementById("film-container").append(...filmCards);
}

render();

const input = document.querySelector("input");
input.addEventListener("keyup", function () {
  // update the searchTerm
  state.searchTerm = input.value;
  // clear the previous films
  document.getElementById("film-container").innerHTML = "";

  render();
});
