import React from 'react';

import './CommentAuthor.css';

const CommentAuthor = ({author}) => {
  return ( 
    <div className="author">
      <img src={author.photo} alt="User thumbnail"/>
      <p className="author-name">{author.username}</p> 
      <p className="timestamp">&#183; timestamp</p>
    </div>
   );
}
 
export default CommentAuthor;