import { search } from './search.js';

const menu = () => {
  const container = document.getElementById('menu-cover');
  const render = `<div id="menu-wraper"><form id="search-form-menu">       
    <input type="text"  id="search-bar" required placeholder="Search Movies"/>
  <button id="search-btn1">Search</button>
</form>
<div>
`;
  container.innerHTML = render;
  const searchBtn = document.getElementById('search-btn1');
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    search();
  });
};
export default menu;
