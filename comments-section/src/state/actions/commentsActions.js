import { v4 as uuidv4 } from 'uuid';

export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const REMOVE = 'REMOVE';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';

export const add = ({author, comment}) => ({
  type: ADD,
  payload: {
    id: uuidv4(),
    author,
    comment,
  }
});

export const remove = ({id}) => ({
  type: REMOVE,
  payload: {
    id,
  }
});

export const edit = ({id, author, comment }) => ({
  type: EDIT,
  payload: {
    id,
    author,
    comment,
  }
})

export const fetchComments = () => ({
  type: FETCH_COMMENTS,
})