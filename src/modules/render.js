import getvShow from './getvshow.js';
import selector from './selectors.js';

const renderShows = (async () => {
  let render;
  const shows = await getvShow();
  shows.forEach((e) => {
    render += `
    <li class="show"  id=${e.id}><img src=${e.image.medium} alt="movie-poster" class="movie-poster">
    <h3 class="show-name">${e.name}</h3>
    <div class="show-btns">
    <i class="fa-solid fa-heart">
    </i>
    <p ></p>
    <i class="fa-solid fa-comment"></i>
    </div>
    </li>
    `;
  });

  selector.allShows.innerHTML = render.replace('undefined', '');
  const movieSize = `<h3>${shows.length} shows Found in the Movie DabaBase</h3>`;
  selector.movieDbInfo.innerHTML = movieSize;
});
export default renderShows;