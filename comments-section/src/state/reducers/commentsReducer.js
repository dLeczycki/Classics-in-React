import {ADD, EDIT, REMOVE} from '../actions/commentsActions';

export const commentsReducer = (state = [{id: 'aa', author: 'Daniel Łęczycki', comment: 'My first comment'}], action) => {
  switch(action.type){
    case ADD:
      return [...state, action.payload];
    
      case EDIT:
      return state.map(comment => {
        if(comment.id !== action.payload.id) return state;

        return({
          id: action.payload.id,
          author: action.payload.author,
          comment: action.payload.comment,
        })
      })
    
      case REMOVE:
      return state.filter(comment => comment.id !== action.payload.id);
    
      default: 
    return state;
  }
}