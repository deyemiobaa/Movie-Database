import './style.css';
import renderShows from './modules/render.js';
import { postAComment } from './modules/comments.js';
import {search} from './modules/search.js';
const searchBtn= document.querySelector('#search-btn');
searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("selected! ");
    search();
});
renderShows();
postAComment();