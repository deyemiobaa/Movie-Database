const moviePopup = document.querySelector('.movie-popup');
const moviePosters = document.querySelector('.movie-poster');
const movieTitle = document.querySelector('.movie-title');
const movieLanguage = document.querySelector('.movie-language');
const movieYear = document.querySelector('.movie-year');
const movieGenre = document.querySelector('.movie-genre');
const movieType = document.querySelector('.movie-type');
const movieRating = document.querySelector('.movie-rating');
const movieDescription = document.querySelector('.movie-description');

class Popup {
  replaceMultipleString = (str) => str.replace('</b>', '').replace('<b>', '').replace('</p>', '').replace('<p>', '')

  getMovieGenres = (array) => {
    let res = '';
    for (let i = 0; i < array.length; i += 1) {
      res += `"${array[i]}" `;
    }
    return res;
  }

  getPopup = async (movieId) => {
    const response = await fetch(`https://api.tvmaze.com/shows/${movieId}`);
    return response.json();
  }

  populatePopup(currentShow) {
    moviePosters.src = currentShow.image.original;
    movieTitle.textContent = `Name: ${currentShow.name}`;
    movieYear.textContent = `Year: ${currentShow.premiered.slice(0, 4)}`;
    movieGenre.textContent = `Genres: ${this.getMovieGenres(currentShow.genres)}`;
    movieType.textContent = currentShow.type;
    movieLanguage.textContent = `Language: ${currentShow.language}`;
    movieRating.textContent = `Average rating: ${currentShow.rating.average}`;
    movieDescription.textContent = `Description: ${this.replaceMultipleString(currentShow.summary)}`;
    moviePopup.style.display = 'flex';
  }

  closePopup = () => {
    const moviePopupClose = document.querySelector('.movie-popup-close');
    moviePopupClose.addEventListener('click', () => {
      moviePopup.style.display = 'none';
    });
  }
}

export default Popup;