import { search } from './search.js';

const container = document.getElementById('menu-cover');

const closeMenu = () => {
  const searchContainer = document.querySelector('.search');
  searchContainer.style.display = 'none';
  container.style.width = '0';
  setTimeout(() => {
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
  const searchContainer = document.querySelector('.search');
  setTimeout(() => {
    searchContainer.style.display = 'flex';
  }, 700);
  const searchBtn = document.querySelector('#search-btn');
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    search();
    closeMenu();
  });
  const closeBtn = document.querySelector('.close-menu');
  closeBtn.addEventListener('click', () => {
    closeMenu();
  });
};
export default menu;
