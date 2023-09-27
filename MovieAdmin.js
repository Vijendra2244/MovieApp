let API_KEY = "8fbe97ea";
let container = document.getElementById("container");

function getData() {
  let searchParam = document.getElementById("searchParam").value;

  fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchParam}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      displayData(res.Search);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function displayData(moviesList) {
  container.innerHTML = "";

  if (!moviesList || moviesList.length === 0) {
    let notFoundDiv = document.createElement("div");
    notFoundDiv.textContent = "No Results Found";
    notFoundDiv.className = "notFound";
    container.appendChild(notFoundDiv);
  } else {
    moviesList.map((movie) => {
      let movieCard = document.createElement("div");
      movieCard.className = "card";

      let posterElement = document.createElement("img");
      posterElement.src = movie.Poster;
      posterElement.className = "imgSrc";

      let titleElement = document.createElement("p");
      titleElement.textContent = "Title : " + movie.Title;
      titleElement.className = "title";

      let yearElement = document.createElement("p");
      yearElement.textContent = "Year : " + movie.Year;
      yearElement.className = "year";

      let idElement = document.createElement("p");
      idElement.textContent = "IMDB-ID : " + movie.imdbID;
      idElement.className = "Id";

      let typeElement = document.createElement("p");
      typeElement.textContent = "Type : " + movie.Type;
      typeElement.className = "type";

      let detailButton = document.createElement("button");
      detailButton.textContent = "Movie Details";
      detailButton.className = "details";
      movieCard.append(
        posterElement,
        titleElement,
        yearElement,
        idElement,
        typeElement,
        detailButton
      );

      movieCard.addEventListener("click", function (e) {
        localStorage.setItem("imdbID", movie.imdbID);
        location.href = "/movieDetail.html";
      });

      container.append(movieCard);
    });
  }
}
