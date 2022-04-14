import selector from './selectors.js';

const delayDisplay = () => {
  selector.allShows.style.display = 'none';
  selector.headerWrap.style.display = 'none';
  document.body.classList.add('scroll-hide');

  setTimeout(() => {
    selector.allShows.style.display = 'grid';
    selector.headerWrap.style.display = 'flex';
  }, 2000);

  selector.button.addEventListener('click', () => {
    selector.overlay.style.display = 'none';
    document.body.classList.remove('scroll-hide');
  });
};

export default delayDisplay;