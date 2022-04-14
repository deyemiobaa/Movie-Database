import './style.css';
import poster from './modules/wallpaper-dk.svg';
import renderShows from './modules/render.js';
import { postAComment } from './modules/comments.js';
import { search } from './modules/search.js';
import delayDisplay from './modules/animations.js';
const searchBtn = document.querySelector('#search-btn');
searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  search();
});
document.querySelector('.poster').src = poster;

delayDisplay();
renderShows();
postAComment();
