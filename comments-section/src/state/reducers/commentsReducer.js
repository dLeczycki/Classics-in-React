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
      return [
          {id: 'aa', author: 'Daniel', comment: 'Hello there!'},
          {id: 'bb', author: 'Mike', comment: 'Hello! 😊'},
          {id: 'cc', author: 'Daniel', comment: 'How do you like this comment section?'},
          {id: 'dd', author: 'Mike', comment: 'It\'s pretty cool, I have to admit!'},
          {id: 'ee', author: 'Daniel', comment: 'Thanks mate! ❤'},
      ]

    default: 
      return state;
  }
}