/* eslint-disable import/no-cycle */
import renderShows from './render.js';

const getvShow = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  return response.json();
};
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ED1rQK1snOoAMYBCYLLf/likes';
const addLikes = async (id) => {
  await fetch(url,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  renderShows();
};
const getlikes = (async () => {
  const response = await fetch(url, { method: 'GET' });
  return response.json();
});
export { getvShow, addLikes, getlikes };
