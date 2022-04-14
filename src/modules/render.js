/* eslint-disable import/no-cycle */
import { getvShow, getlikes } from './getvshow.js';
import selector from './selectors.js';
import { likeCounter, showCounter } from './likeCounter.js';
import clickEvents from './events.js';

const renderShows = (async (shows) => {
  let render;
  let flag=true;   //true -> ALL flase -> search
  let showsData=[];
  if (shows==undefined){
     showsData= await getvShow();
  }
  else{
    showsData=shows;

  }
  const likes = await getlikes();
  let likeCount = 0;
  showsData.forEach((e) => {
    likeCount =  likeCounter(e, likeCount, likes); 
    let id,showName,img1;
    if (shows==undefined){
      id=e.id;
      showName=e.name;
      img1=e.image.medium;
    }
    else{
       id=e.show.id;
       showName=e.show.name;
     
      try{
        img1=e.show.image.medium;
      }
      catch(err){
        console.log("ERRRROOORR ",err);
      }
    }
    render += `
    <li class="show"  id=${id}><img src=${img1} alt="movie-poster" class="movie-poster">
    <h3 class="show-name">${showName}</h3>
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
console.log("finsihed loop !")
  selector.allShows.innerHTML = render.replace('undefined', '');

  const movieSize = `<h3>${showCounter(showsData)} shows Found in the Movie DabaBase</h3>`;
  selector.movieDbInfo.innerHTML = movieSize;
  clickEvents();
});


export default renderShows;