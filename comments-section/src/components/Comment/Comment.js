import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {remove, edit} from '../../state/actions/commentsActions';

import './Comment.css';

const Comment = ({commentDetails}) => {
  const dispatch = useDispatch();
  const {id, author, comment} = commentDetails;

  const [isInEditionMode, setIsInEditionMode] = useState(false);
  const [commentState, setCommentState] = useState(comment);

  const handleChangeEditionMode = () => {
    setCommentState(comment);
    setIsInEditionMode(prevState => !prevState);
  }

  const handleRemove = () => {
    dispatch(remove({id}));
  }

  const handleCommentChange = (e) => {
    setCommentState(e.target.value);
  }

  const handleSaveComment = (e) => {
    dispatch(edit({id, author, comment: commentState}));
    handleChangeEditionMode();
  }

  return ( <div className="comment">
    
    {isInEditionMode ? 
    <>
      <p>{author} : <textarea name="comment" id="comment" value={commentState} onChange={handleCommentChange}/></p>
      <button onClick={handleSaveComment}>Save</button>
      <button onClick={handleChangeEditionMode}>Cancel</button>
    </> : 
    <>
      <p>{author} : {comment}</p>
      <button onClick={handleRemove}>X</button>
      <button onClick={handleChangeEditionMode}>Edit</button>
    </>}
  </div> );
}
 
export default Comment;