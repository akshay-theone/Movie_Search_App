let api = "https://www.omdbapi.com/?i=tt3896198&apikey=addb605a&t=";

function search() {
  let movieInput = document.querySelector("#input");
  let query = api + movieInput.value;
  let movieposter = document.querySelector(".poster");
  let desc = document.querySelector("#desc");
  let movieTitle = document.querySelector("#title");
  let movieYear = document.querySelector("#year");
  let movieRated = document.querySelector("#rated");
  let movieReleased = document.querySelector("#released");
  let movieGenre = document.querySelector("#genre");
  let movieDirector = document.querySelector("#director");
  let movieActor = document.querySelector("#actor");
  let movieAward = document.querySelector("#award");
  let movieLanguage = document.querySelector("#language");
  let movieRating = document.querySelector("#rating");
  let hero = document.querySelector(".hero");
  let error = document.querySelector(".error");
  fetch(query)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      if (data.Error === "Movie not found!") {
        hero.classList.add("hidden");
        error.classList.remove("hidden");

        error.innerText = "Movie not found";
      } else {
        error.classList.add("hidden");
        hero.classList.remove("hidden");
        movieposter.src = data.Poster;
        movieTitle.innerText = "Title: " + data.Title;
        desc.innerText = data.Plot;
        movieYear.innerText = "Year: " + data.Year;
        movieRated.innerText = "Rated: " + data.Rated;
        movieReleased.innerText = "Released Date: " + data.Released;
        movieGenre.innerText = "Genre: " + data.Genre;
        movieDirector.innerText = "Directors: " + data.Director;
        movieActor.innerText = "Actors: " + data.Actors;
        movieAward.innerText = "Awards: " + data.Awards;
        movieLanguage.innerText = "Language: " + data.Language;
        movieRating.innerText = "ImdbRating: " + data.imdbRating;
        console.log(data);
      }
    });
}

// search();
