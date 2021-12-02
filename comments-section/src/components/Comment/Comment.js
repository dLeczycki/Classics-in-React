import React, {useState} from 'react';
import {useDispatch, connect} from 'react-redux';
import {remove, edit} from '../../state/actions/commentsActions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faEdit} from '@fortawesome/free-solid-svg-icons';

import './Comment.css';

const Comment = (props) => {
  const {commentDetails, user} = props;
  const {id, author, comment} = commentDetails;

  const dispatch = useDispatch();

  const [isInEditionMode, setIsInEditionMode] = useState(false);
  const [commentInput, setCommentStateInput] = useState(comment);

  const handleChangeEditionMode = () => {
    setCommentStateInput(comment);
    setIsInEditionMode(prevState => !prevState);
  }

  const handleRemove = () => {
    dispatch(remove({id}));
  }

  const handleCommentChange = (e) => {
    setCommentStateInput(e.target.value);
  }

  const handleSaveComment = (e) => {
    dispatch(edit({id, author, comment: commentInput}));
    handleChangeEditionMode();
  }

  const isAuthorOfComment = (user.id === author.id);

  const createCommentControlGroup = () => {
    if(isAuthorOfComment && !isInEditionMode) {
      return (
        <div className="comment-control-group">
          <button className="edit-comment" onClick={handleChangeEditionMode}><FontAwesomeIcon icon={faEdit}/></button>
          <button className="delete-comment" onClick={handleRemove}><FontAwesomeIcon icon={faTimes}/></button>
        </div>
      )
    } else if(isAuthorOfComment){
      return (
        <div className="comment-control-group">
          <button className="delete-comment" onClick={handleRemove}><FontAwesomeIcon icon={faTimes}/></button>
        </div>
      )
    }
    return null;
  }

  return ( 
  <div className="comment">
    <div className="author">
      <img src={author.photo} alt="" />
      <p className="author-name">{author.username}</p> 
      <p className="timestamp">&#183; timestamp</p>
      {createCommentControlGroup()}
    </div>
    
    {isInEditionMode ? 
    <div className="comment-edit-group">
      <textarea name="comment" className="comment" value={commentInput} onChange={handleCommentChange}/>
      <div className="comment-edit-button-group">
        <button onClick={handleSaveComment}>Save</button>
        <button className="cancel-edit" onClick={handleChangeEditionMode}>Cancel</button>
      </div>
    </div> : 
    <>
      <p className="comment">{comment}</p>
    </>}
  </div> );
}

const mapStateToProps = (state) => {
  return {
    user: state.login.user,
  }
}

export default connect(mapStateToProps)(Comment);