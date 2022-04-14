const showCounter = (movie) => movie.length;

const likeCounter = (e, likeCount, likes) => {
  likes.forEach((eachLikes) => {
    let id;
    try {
      id = e.show.id;
    } catch (err) {
      id = e.id;
    }
    if (String(eachLikes.item_id) === String(id)) {
      likeCount = eachLikes.likes;
    }
  });

  return likeCount;
};

export { likeCounter, showCounter };