/* eslint-disable import/no-cycle */
import { getvShow, addLikes, getlikes } from './getvshow.js';
import selector from './selectors.js';
import Popup from './popup.js';
import { getAllComments } from './comments.js';

const clickEvents = () => {
  const likeBtn = document.querySelectorAll('.like-btn');
  likeBtn.forEach((e) => {
    e.addEventListener('click', () => {
      const { id } = e.parentNode.parentNode;
      addLikes(id);
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

const renderShows = (async () => {
  let render;
  const shows = await getvShow();
  const likes = await getlikes();
  let likeCount = 0;
  shows.forEach((e) => {
    likes.forEach((eachLikes) => {
      if (String(eachLikes.item_id) === String(e.id)) {
        likeCount = eachLikes.likes;
      }
    });
    render += `
    <li class="show"  id=${e.id}><img src=${e.image.medium} alt="movie-poster" class="movie-poster">
    <h3 class="show-name">${e.name}</h3>
    <div class="show-btns">
    <i class="fa-solid fa-heart like-btn">
    </i>
    <p> ${likeCount}</p>
    <i class="fa-solid fa-comment"></i>
    </div>
    </li>
    `;
    likeCount = 0;
  });

  selector.allShows.innerHTML = render.replace('undefined', '');
  const movieSize = `<h3>${shows.length} shows Found in the Movie DabaBase</h3>`;
  selector.movieDbInfo.innerHTML = movieSize;
  clickEvents();
});

export default renderShows;