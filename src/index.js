import './style.css';
import poster from './modules/wallpaper-dk.svg';
import renderShows from './modules/render.js';
import { postAComment } from './modules/comments.js';
import { search } from './modules/search.js';
import delayDisplay from './modules/animations.js';
import selector from './modules/selectors.js';
import menu from './modules/menu.js';

const menu1 = document.querySelector('#menu');

menu1.addEventListener('click', () => {
  menu();
});

const searchBtn = document.querySelector('#search-btn');
searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  search();
});


document.querySelector('.poster').src = poster;

const sessionstore = sessionStorage.getItem('session') || false;
if (sessionstore === false) {
  delayDisplay();
  sessionStorage.setItem('session', 'true');
} else {
  selector.overlay.style.display = 'none';
}

renderShows();
postAComment();
