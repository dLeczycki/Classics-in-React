import React, {useState} from 'react'
import {useDispatch, connect} from 'react-redux';
import {add} from '../../state/actions/commentsActions';

import './CommentsForm.css';

const CommentsForm = ({login}) => {
  const dispatch = useDispatch();
  const {user, loggedIn} = login;

  const [comment, setComment] = useState('');
  const [commentError, setCommentError] = useState('');

  const handleValidation = () => {
    let formIsValid = true;
    
    if(comment === '') {
      setCommentError('Comment cannot be empty.');
      formIsValid = false;
    } else if (!loggedIn) {
      setCommentError('You must be logged in.');
      formIsValid = false;
    }
    else setCommentError('');

    return formIsValid;
  }

  const handleChangeComment = (e) => {
    setComment(e.target.value);
  }

  const handleSendComment = (e) => {
    e.preventDefault();
    const formIsValid = handleValidation();

    if(!formIsValid) return;

    dispatch(add({author: user, comment: comment}))
    
    setComment('');
  }

  return ( 
  <section className="comments-form">
    <h3>Add comment</h3>
    <form onSubmit={handleSendComment}>
      <label htmlFor="comment">
        <textarea name="comment" id="comment" value={comment} onChange={handleChangeComment}/>
      </label>
      <button type="submit">Send</button>
    </form>
    <span className="error">{commentError}</span>
  </section> );
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  }
}
 
export default connect(mapStateToProps)(CommentsForm);