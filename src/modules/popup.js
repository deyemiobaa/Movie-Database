const moviePopup = document.querySelector('.movie-popup');
const moviePosters = document.querySelector('.movie-poster');
const movieTitle = document.querySelector('.movie-title');
const movieLanguage = document.querySelector('.movie-language');
const movieYear = document.querySelector('.movie-year');
const movieGenre = document.querySelector('.movie-genre');
const movieType = document.querySelector('.movie-type');
const movieRating = document.querySelector('.movie-rating');
const movieDescription = document.querySelector('.movie-description');
const moviePopupWrap = document.querySelector('.movie-popup-wrap');

class Popup {
  replaceMultipleString = (str) => str.replace('</b>', '').replace('<b>', '').replace('</p>', '').replace('<p>', '')
    .replace('<i>', '')
    .replace('</i>', '')

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
    moviePopupWrap.id = currentShow.id;
    moviePosters.src = currentShow.image.original;
    movieTitle.textContent = `Name: ${currentShow.name}`;
    movieYear.innerHTML = `Year: <i class="fa-solid fa-calendar star"></i> ${currentShow.premiered.slice(0, 4)}`;
    movieGenre.textContent = `Genres: ${this.getMovieGenres(currentShow.genres)}`;
    movieType.textContent = `Type: ${currentShow.type}`;
    movieLanguage.textContent = `Language: ${currentShow.language}`;
    movieRating.innerHTML = `Average rating:  <i class="fa-solid fa-star-half-stroke star"></i> ${currentShow.rating.average}`;
    movieDescription.textContent = `Summary: ${this.replaceMultipleString(currentShow.summary)}`;
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