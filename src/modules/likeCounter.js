const showCounter = (movie) => movie.length;

const likeCounter = (e, likeCount, likes) => {
  likes.forEach((eachLikes) => {
    if (String(eachLikes.item_id) === String(e.id)) {
      likeCount = eachLikes.likes;
    }
  });
  return likeCount;
};

export { likeCounter, showCounter };