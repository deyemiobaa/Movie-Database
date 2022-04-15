import { search } from './search.js';

const container = document.getElementById('menu-cover');
const searchContainer = document.querySelector('.search');
const searchBtn = document.getElementById('search-btn');
const closeBtn = document.querySelector('.close-menu');

const closeMenu = () => {
  searchContainer.style.display = 'none';
  setTimeout(() => {
    container.style.width = '0';
    container.innerHTML = '';
  }, 500);
};
const menu = () => {
  container.innerHTML = `
  <div class="close-menu">
    <i class="fas fa-times fa-2x"></i>
  </div>
  <div class="search">
    <input class="search-bar" type="text" id="menu-search-bar" required placeholder="Search Movies">
    <button id="search-btn">Search</button>
  </div>`;
  container.style.width = '100%';
  setTimeout(() => {
    searchContainer.style.display = 'flex';
  }, 700);
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    search();
    closeMenu();
  });
  closeBtn.addEventListener('click', closeMenu);
};
export default menu;
