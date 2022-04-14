import './style.css';
import poster from './modules/wallpaper-dk.svg';
import renderShows from './modules/render.js';
import { postAComment } from './modules/comments.js';
import delayDisplay from './modules/animations.js';
import selector from './modules/selectors.js';

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
