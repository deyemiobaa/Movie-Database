/* eslint-disable import/no-cycle */
import { addLikes } from './getvshow.js';
import renderShows from './render.js';
import Popup from './popup.js';
import { getAllComments } from './comments.js';
import { shows } from './search.js';

const clickEvents = () => {
  const likeBtn = document.querySelectorAll('.like-btn');
  likeBtn.forEach((e) => {
    e.addEventListener('click', async () => {
      const { id } = e.parentNode.parentNode;
      await addLikes(id);
      setTimeout(() => {
        renderShows(shows);
      }, 200);
    });
  });
};

const openShow = (e, id) => {
  const popup = new Popup();
  e.addEventListener('click', async () => {
    document.querySelector('.loader').style.display = 'flex';
    const movieId = id;
    const currentShow = await popup.getPopup(movieId);
    popup.populatePopup(currentShow);
    getAllComments(movieId);
    setTimeout(() => {
      document.querySelector('.loader').style.display = 'none';
    }, 1000);
  });
};

const popupEvents = () => {
  const popup = new Popup();
  const showList = document.querySelectorAll('.fa-comment');
  const poster = document.querySelectorAll('.movie-poster');
  showList.forEach((e) => {
    const { id } = e.parentNode.parentNode;
    openShow(e, id);
  });
  poster.forEach((e) => {
    const { id } = e.parentNode;
    openShow(e, id);
  });
  popup.closePopup();
};
export { clickEvents, popupEvents };