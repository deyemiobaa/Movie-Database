import selector from './selectors.js';

const delayDisplay = () => {
  selector.allShows.style.display = 'none';
  selector.headerWrap.style.display = 'none';
  document.body.classList.add('scroll-hide');

  selector.button.addEventListener('click', () => {
    selector.overlay.style.display = 'none';
    document.body.classList.remove('scroll-hide');
    selector.allShows.style.display = 'grid';
    selector.headerWrap.style.display = 'flex';
  });
};

export default delayDisplay;