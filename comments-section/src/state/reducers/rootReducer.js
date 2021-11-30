import { commentsReducer } from "./commentsReducer";
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  comments: commentsReducer,
})

