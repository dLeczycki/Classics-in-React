import React from 'react';

const Comment = ({commentDetails}) => {
  return ( <div className="comment">
    {commentDetails.author} : {commentDetails.comment}
  </div> );
}
 
export default Comment;