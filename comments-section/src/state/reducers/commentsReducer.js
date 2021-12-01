import comments from '../../data/comments.json';
import users from '../../data/users.json';
import {ADD, EDIT, REMOVE, FETCH_COMMENTS} from '../actions/commentsActions';

export const commentsReducer = (state = [], action) => {
  switch(action.type){
    case ADD:
      return [...state, action.payload];
    
    case EDIT:
      return state.map(comment => {
        if(comment.id !== action.payload.id) return comment;

        return {
          id: action.payload.id,
          author: action.payload.author,
          comment: action.payload.comment,
        }
      })
    
    case REMOVE:
      return state.filter(comment => comment.id !== action.payload.id);
    
    case FETCH_COMMENTS:
      return comments.map(comment => {
        const user = users.find(user => user.id === comment.author);
        return {...comment, author: user};
        });

    default: 
      return state;
  }
}