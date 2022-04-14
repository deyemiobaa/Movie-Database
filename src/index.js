import './style.css';
import poster from './modules/wallpaper-dk.svg';
import renderShows from './modules/render.js';
import { postAComment } from './modules/comments.js';
import delayDisplay from './modules/animations.js';

document.querySelector('.poster').src = poster;

delayDisplay();
renderShows();
postAComment();
