import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faEdit} from '@fortawesome/free-solid-svg-icons';

import './CommentControlGroup.css';

const CommentControlGroup = ({isAuthorOfComment, isInEditionMode, handleChangeEditionMode, handleRemove}) => {
  const createCommentControlGroup = () => {
    if(isAuthorOfComment && !isInEditionMode) {
      return (
        <>
          <button className="edit-comment" onClick={handleChangeEditionMode}><FontAwesomeIcon icon={faEdit}/></button>
          <button className="delete-comment" onClick={handleRemove}><FontAwesomeIcon icon={faTimes}/></button>
        </>
      )
    } else if(isAuthorOfComment){
      return (
        <>
          <button className="delete-comment" onClick={handleRemove}><FontAwesomeIcon icon={faTimes}/></button>
        </>
      )
    }
    return null;
  }

  return (
  <div className="comment-control-group">
    {createCommentControlGroup()} 
  </div>);
}
 
export default CommentControlGroup;