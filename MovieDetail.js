// moviedetails.js
let container = document.getElementById("container");
let API_KEY = "8fbe97ea";

function backToMoviesPage() {
  location.href = "./MovieAdmin.html";
}

function init() {
  let imdbID = localStorage.getItem("imdbID");

  // get the data
  fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      displayData(res);
    });

  if (imdbID) {
  } else {
    container.innerHTML = "";
    let notFoundDiv = document.createElement("div");
    notFoundDiv.textContent = "IMDB ID Invalid.. Please Check";
    container.append(notFoundDiv);
  }
}

function displayData(movie) {
  container.innerHTML = "";
  let movieCard = document.createElement("div");
  movieCard.className = "card";

  let posterElement = document.createElement("img");
  posterElement.src = movie.Poster;
  posterElement.className = "imgPoster"

  let titleElement = document.createElement("p");
  titleElement.textContent = "Title  : " + movie.Title;
  titleElement.className = "mg-detail";

  let yearElement = document.createElement("p");
  yearElement.textContent = "Year : " + movie.Year;
  yearElement.className = "mg-detail";

  let ratedElement = document.createElement("p");
  ratedElement.textContent = "Rated : " + movie.Rated;
  ratedElement.className = "mg-detail";

  let releasedElement = document.createElement("p");
  releasedElement.textContent = "Released : " + movie.Released;
  releasedElement.className = "mg-detail";

  let runtimeElement = document.createElement("p");
  runtimeElement.textContent = "Runtime : " + movie.Runtime;
  runtimeElement.className = "mg-detail";

  let genreElement = document.createElement("p");
  genreElement.textContent = "Genre : " + movie.Genre;
  genreElement.className = "mg-detail";

  let directorElement = document.createElement("p");
  directorElement.textContent = "Director : " + movie.Director;
  directorElement.className = "mg-detail";

  let writerElement = document.createElement("p");
  writerElement.textContent = "Writer : " + movie.Writer;
  writerElement.className = "mg-detail";

  let plotElement = document.createElement("p");
  plotElement.textContent = "Plot : " + movie.Plot;
  plotElement.className = "mg-detail";

  let languageElement = document.createElement("p");
  languageElement.textContent = "Language : " + movie.Language;
  languageElement.className = "mg-detail";

  let countryElement = document.createElement("p");
  countryElement.textContent = "Country : " + movie.Country;
  countryElement.className = "mg-detail";

  let awardsElement = document.createElement("p");
  awardsElement.textContent = "Awards : " + movie.Awards;
  awardsElement.className = "mg-detail";

  let metascoreElement = document.createElement("p");
  metascoreElement.textContent = "Metascore : " + movie.Metascore;
  metascoreElement.className = "mg-detail";

  let imdbRatingElement = document.createElement("p");
  imdbRatingElement.textContent = "IMDB Rating : " + movie.imdbRating;
  imdbRatingElement.className = "mg-detail";

  let imdbVotesElement = document.createElement("p");
  imdbVotesElement.textContent = "IMDB Votes : " + movie.imdbVotes;
  imdbVotesElement.className = "mg-detail";

  let typeElement = document.createElement("p");
  typeElement.textContent = "Type : " + movie.Type;
  typeElement.className = "mg-detail";

  let DVDElement = document.createElement("div");
  DVDElement.textContent = "DVD : " + movie.DVD;
  DVDElement.className = "mg-detail";

  let boxOfficeElement = document.createElement("p");
  boxOfficeElement.textContent = "Box Office  : " + movie.BoxOffice;
  boxOfficeElement.className = "mg-detail";

  let productionElement = document.createElement("p");
  productionElement.textContent = "Production : " + movie.Production;
  productionElement.className = "mg-detail";

  let websiteElement = document.createElement("p");
  websiteElement.textContent = "Website : " + movie.Website;
  websiteElement.className = "mg-detail";

  let responseElement = document.createElement("p");
  responseElement.textContent = "Response : " + movie.Response;
  responseElement.className = "mg-detail";

  movieCard.append(
    posterElement,
    titleElement,
    yearElement,
    ratedElement,
    releasedElement,
    runtimeElement,
    genreElement,
    directorElement,
    writerElement,
    plotElement,
    languageElement,
    countryElement,
    awardsElement,
    metascoreElement,
    imdbRatingElement,
    imdbVotesElement,
    typeElement,
    DVDElement,
    boxOfficeElement,
    productionElement,
    websiteElement,
    responseElement
  );

  container.append(movieCard);
}

init();
