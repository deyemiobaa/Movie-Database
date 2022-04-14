import { addComments, getComments } from './getvshow.js';

const form = document.getElementById('form');
const username = document.getElementById('name');
const comment = document.getElementById('comment');
const commentCount = document.querySelector('.comment-count');
const commentList = document.querySelector('.comment-list');

const getAllComments = async (id) => {
  const allComments = await getComments(id);
  commentCount.textContent = `Comments (${allComments.length})`;
  commentList.innerHTML = '';
  allComments.forEach((e) => {
    commentList.innerHTML += `
    <li>${e.creation_date}  ${e.username}:  ${e.comment}</li>
    `;
  });
};

const postAComment = () => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const movieId = form.parentNode.parentNode.id;
    const response = await addComments(movieId, username.value, comment.value);
    if (response === 201) {
      await getAllComments(movieId);
    }
    form.reset();
  });
};

export { postAComment, getAllComments };