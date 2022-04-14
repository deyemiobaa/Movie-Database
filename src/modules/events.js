/* eslint-disable import/no-cycle */
import { addLikes } from './getvshow.js';
import renderShows from './render.js';
import Popup from './popup.js';
import { getAllComments } from './comments.js';
import {shows} from './search.js';
const clickEvents = () => {
  const likeBtn = document.querySelectorAll('.like-btn');
  likeBtn.forEach((e) => {
    e.addEventListener('click', () => {
      const { id } = e.parentNode.parentNode;
      addLikes(id);
     setTimeout(() => {
      renderShows(shows)
    }, 500);
    });
    
  });
  
  const popup = new Popup();
  const showList = document.querySelectorAll('.fa-comment');
  showList.forEach((e) => {
    e.addEventListener('click', async () => {
      const movieId = e.parentNode.parentNode.id;
      const currentShow = await popup.getPopup(movieId);
      popup.populatePopup(currentShow);
      getAllComments(movieId);
    });
  });
  popup.closePopup();

};
export default clickEvents;