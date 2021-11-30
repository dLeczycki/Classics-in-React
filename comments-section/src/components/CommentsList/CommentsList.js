import React from 'react';
import {useSelector} from 'react-redux';

import Comment from '../Comment/Comment';

import './Comments.css';

const CommentsList = () => {
  const comments = useSelector(state => state.comments);

  const commentsElements = comments.map(commentDetails => (<Comment key={commentDetails.id} commentDetails={commentDetails} />))

  return ( 
    <section className="comments">
      {commentsElements}
    </section>
   );
}
 
export default CommentsList;