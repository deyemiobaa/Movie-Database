import { getvShow } from "./getvshow";
import renderShows from "./render";
let shows;
 const search = async()=>{
 
const {value} = document.getElementById('search-bar');
   const url =`https://api.tvmaze.com/search/shows?q=${value}`;
     shows= await getvShow(url);
    renderShows(shows);
}
export  {search, shows};
