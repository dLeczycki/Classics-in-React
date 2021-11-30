import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {add} from '../../state/actions/commentsActions';

import './CommentsForm.css';

const CommentsForm = () => {
  const dispatch = useDispatch();

  const [comment, setComment] = useState('');
  const [commentError, setCommentError] = useState('');

  const handleValidation = () => {
    let formIsValid = true;
    
    if(comment === '') {
      setCommentError('Comment cannot be empty');
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

    dispatch(add({author: 'Me', comment: comment}))
    
    setComment('');
  }

  return ( 
  <section className="comments-form">
    <form onSubmit={handleSendComment}>
      <label htmlFor="comment">
        Add comment:
        <textarea name="comment" id="comment" value={comment} onChange={handleChangeComment}/>
        <span className="error">{commentError}</span>
      </label>
      <button type="submit">Send</button>
    </form>
  </section> );
}
 
export default CommentsForm;