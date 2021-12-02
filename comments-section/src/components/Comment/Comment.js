import React, {useState} from 'react';
import {useDispatch, connect} from 'react-redux';
import {remove, edit} from '../../state/actions/commentsActions';

import './Comment.css';
import CommentAuthor from './CommentAuthor/CommentAuthor';
import CommentControlGroup from './CommentControlGroup/CommentControlGroup';
import CommentEditGroup from './CommentEditGroup/CommentEditGroup';

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

  return ( 
  <section className="comment">
    <div className="comment-header">
      <CommentAuthor author={author} />
      <CommentControlGroup isAuthorOfComment={isAuthorOfComment} isInEditionMode={isInEditionMode} handleChangeEditionMode={handleChangeEditionMode} handleRemove={handleRemove}/>
    </div>
    <div className="comment-body">
      {
      isInEditionMode 
      ? 
        <CommentEditGroup commentInput={commentInput} handleCommentChange={handleCommentChange} handleSaveComment={handleSaveComment} handleChangeEditionMode={handleChangeEditionMode}/>
      : 
        <p className="comment">{comment}</p>
      }
    </div>
  </section> );
}

const mapStateToProps = (state) => {
  return {
    user: state.login.user,
  }
}

export default connect(mapStateToProps)(Comment);