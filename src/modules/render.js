/* eslint-disable import/no-cycle */
import { getvShow, getlikes } from './getvshow.js';
import selector from './selectors.js';
import { likeCounter, showCounter } from './likeCounter.js';
import { clickEvents, popupEvents } from './events.js';

const renderShows = (async () => {
  let render;
  const shows = await getvShow();
  const likes = await getlikes();
  let likeCount = 0;
  shows.forEach((e) => {
    likeCount = likeCounter(e, likeCount, likes);
    render += `
    <li class="show"  id=${e.id}>
      <h3 class="show-name">${e.name}</h3>
      <img src=${e.image.medium} alt="movie-poster" class="movie-poster">
      <div class="show-btns">
        <i class="fa-solid fa-heart like-btn"></i>
        <p class="like-count"> ${likeCount}</p>
        <i class="fa-solid fa-comment"></i>
      </div>
      <div class="button-container"></div>
    </li>
    `;
    likeCount = 0;
  });

  selector.allShows.innerHTML = render.replace('undefined', '');

  const movieSize = `<h3>${showCounter(shows)} shows Found in the Movie DabaBase</h3>`;
  selector.movieDbInfo.innerHTML = movieSize;
  clickEvents();
  popupEvents();
});

export default renderShows;