import React, { useState } from 'react';
import CommentItem from './CommentsItem';

const CommentsApp = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleAddComment = (event) => {
    event.preventDefault();
    if (name && text) {
      const newComment = {
        id: new Date().getTime(),
        name,
        text,
        date: new Date().toLocaleString(),
        isLiked: false,
      };
      setComments([...comments, newComment]);
      setName('');
      setText('');
    }
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  const handleToggleLike = (id) => {
    setComments(comments.map(comment => 
      comment.id === id ? { ...comment, isLiked: !comment.isLiked } : comment
    ));
  };

  return (
    <div className="comments-app">
      <h1 className="comments-title">Comments</h1>
      <div className="comments-form-container">
        <img src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" alt="comments" className="comments-img" />
        <form className="comments-form" onSubmit={handleAddComment}>
          <input
            type="text"
            className="input"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="textarea"
            placeholder="Your Comment"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="button">Add Comment</button>
        </form>
      </div>
      <ul className="comments-list">
        {comments.map(comment => (
          <CommentItem
            key={comment.id}
            comment={comment}
            onDeleteComment={handleDeleteComment}
            onToggleLike={handleToggleLike}
          />
        ))}
      </ul>
    </div>
  );
};

export default CommentsApp;
