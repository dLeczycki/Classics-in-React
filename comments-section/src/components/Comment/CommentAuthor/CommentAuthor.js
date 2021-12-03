import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';

import './CommentAuthor.css';

const CommentAuthor = ({author, timestamp}) => {

  const getTimestamp = () => {
    const currentMoment = moment();
    const timestampMoment = moment(timestamp);

    const isThisYear = currentMoment.year() === timestampMoment.year();
    const isThisWeek = timestampMoment.isSameOrAfter(currentMoment.subtract(7, 'days'));
    const isToday = isThisYear && isThisWeek && currentMoment.day() === timestampMoment.day();

    if(isToday) return <Moment format="HH:MM">{timestamp}</Moment>
    if(isThisWeek) return <Moment format="dddd, HH:MM">{timestamp}</Moment>
    return <Moment format="DD/MM/YYYY, HH:MM">{timestamp}</Moment>
  }

  const timestampElement = getTimestamp();

  return ( 
    <div className="author">
      <img src={author.photo} alt="User thumbnail"/>
      <div className="author-labels">
        <p className="author-name">{author.username} <small className="timestamp">&#183; {timestampElement}</small></p> 
        
      </div>
    </div>
   );
}
 
export default CommentAuthor;