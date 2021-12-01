import React, {useState} from 'react';
import {useDispatch, connect} from 'react-redux';
import {remove, edit} from '../../state/actions/commentsActions';

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

  const editionBlock = (
    <>
    {(user?.id === author.id) ? 
      <>
      <button onClick={handleRemove}>X</button>
      <button onClick={handleChangeEditionMode}>Edit</button>
      </>
      : 
      <></>
    }
    </>
  )

  return ( <div className="comment">
    
    {isInEditionMode ? 
    <>
      <div className="author">
        <img src={author.photo} alt="" />
        <p className="author-name">{author.username}</p> 
        <p className="timestamp">&#183; timestamp</p>
      </div>
      <textarea name="comment" id="comment" value={commentInput} onChange={handleCommentChange}/>
      <button onClick={handleSaveComment}>Save</button>
      <button onClick={handleChangeEditionMode}>Cancel</button>
    </> : 
    <>
    <div className="author">
      <img src={author.photo} alt="" />
      <p className="author-name">{author.username}</p> 
      <p className="timestamp">&#183; timestamp</p>
    </div>
      <p className="comment">{comment}</p>
      {editionBlock}
    </>}
  </div> );
}

const mapStateToProps = (state) => {
  return {
    user: state.login.user,
  }
}

export default connect(mapStateToProps)(Comment);