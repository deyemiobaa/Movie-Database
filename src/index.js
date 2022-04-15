import './style.css';
import poster from './modules/wallpaper-dk.svg';
import posterMb from './modules/wallpaper-mb.svg';
import renderShows from './modules/render.js';
import { postAComment } from './modules/comments.js';
import { search } from './modules/search.js';
import delayDisplay from './modules/animations.js';
import selector from './modules/selectors.js';
import menu from './modules/menu.js';

document.querySelector('.poster').src = poster;
document.querySelector('.poster-mb').src = posterMb;

const hamburger = document.querySelector('#menu');
hamburger.addEventListener('click', () => {
  menu();
});

const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  search();
});

const sessionstore = sessionStorage.getItem('session') || false;
if (sessionstore === false) {
  delayDisplay();
  sessionStorage.setItem('session', 'true');
} else {
  selector.overlay.style.display = 'none';
}

renderShows();
postAComment();
