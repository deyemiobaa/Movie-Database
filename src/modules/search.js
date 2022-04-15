/* eslint-disable import/no-cycle */

/* eslint-disable import/no-mutable-exports */
import { getvShow } from './getvshow.js';
import renderShows from './render.js';

let shows;
const search = async () => {
  try {
    const cover = document.getElementById('menu-wraper');
    cover.style.cssText = 'display:none;';
    const { value } = document.querySelector('.search-bar');
    const url = `https://api.tvmaze.com/search/shows?q=${value}`;
    shows = await getvShow(url);
    renderShows(shows);
  } catch (err) {
    const { value } = document.querySelector('.search-bar');
    const url = `https://api.tvmaze.com/search/shows?q=${value}`;
    shows = await getvShow(url);
    renderShows(shows);
  } finally {
    const load = document.querySelector('.load-animation');
    setTimeout(() => {
      load.style.cssText = 'display:none';
    }, 800);
  }
};
export { search, shows };
