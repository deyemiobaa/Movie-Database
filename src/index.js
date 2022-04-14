import './style.css';
import renderShows from './modules/render.js';
import { postAComment } from './modules/comments.js';
import { search } from './modules/search.js';

const searchBtn = document.querySelector('#search-btn');
searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  search();
});

renderShows();
postAComment();