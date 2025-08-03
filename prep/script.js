// Given a view of film cards and search box
// When a user types in the search box
// Then the view should update to show only matching films.

const state = {
  films: [
    {
      title: "Killing of Flower Moon",
      director: "Martin Scorsese",
      times: ["15:35"],
      certificate: "15",
      duration: 112,
    },
    {
      title: "Typist Artist Pirate King",
      director: "Carol Morley",
      times: ["15:00", "20:00"],
      certificate: "12A",
      duration: 108,
    },
    {
      title: "Jurassic Park",
      director: "Steven Spielberg",
      times: ["15:00", "20:00"],
      certificate: "12A",
      duration: 108,
    },
    {
      title: "Friends",
      director: "?????",
      times: ["15:00", "20:00"],
      certificate: "12A",
      duration: 108,
    },
    {
      title: "Pirates of the Carribean",
      director: "?????",
      times: ["15:00", "20:00"],
      certificate: "12A",
      duration: 108,
    },
  ],
  searchTerm: "",
};
// State: data which may change over time
// we need films array
// we need search term

// steps:
// connect the search term with the film title
// 1. query for the input element
// 2. link the input in the box and update searchTerm state
// 3. filter the films based on the input

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
