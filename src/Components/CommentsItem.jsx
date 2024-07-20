import React from 'react';


const CommentItem = ({ comment, onDeleteComment, onToggleLike }) => {
  const { id, name, text, date, isLiked } = comment;
  const likeButtonText = isLiked ? 'Unlike' : 'Like';
  const likeImgUrl = isLiked 
    ? 'https://pngimg.com/uploads/like/like_PNG55.png'
    : 'https://pngimg.com/uploads/like/like_PNG55.png';

  const handleDelete = () => {
    onDeleteComment(id);
  };

  const handleToggleLike = () => {
    onToggleLike(id);
  };

  return (
    <li className="comment-item">
      <div className="comment-header">
        <h3 className="comment-author">{name}</h3>
        <p className="comment-date">{date}</p>
      </div>
      <p className="comment-text">{text}</p>
      <div className="comment-footer">
        <button type="button" onClick={handleToggleLike} className="like-button">
          <img src={likeImgUrl} alt="like" className="like-img" />
          {likeButtonText}
        </button>
        <button type="button" onClick={handleDelete} className="delete-button">
          <img src="https://tse1.mm.bing.net/th?id=OIP.3gR9XyiYcYuKwZALrVaUGAHaHa&pid=Api&P=0&h=180" alt="delete" className="delete-img" />
        </button>
      </div>
    </li>
  );
};

export default CommentItem;
