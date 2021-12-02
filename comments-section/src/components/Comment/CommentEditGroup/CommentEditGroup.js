import React from 'react';
import './CommentEditGroup.css';

const CommentEditGroup = ({commentInput, handleCommentChange, handleSaveComment, handleChangeEditionMode}) => {
  return ( 
    <div className="comment-edit-group">
      <textarea name="comment" className="comment" value={commentInput} onChange={handleCommentChange}/>
      <div className="comment-edit-button-group">
        <button onClick={handleSaveComment}>Save</button>
        <button className="cancel-edit" onClick={handleChangeEditionMode}>Cancel</button>
      </div>
    </div>
   );
}
 
export default CommentEditGroup;