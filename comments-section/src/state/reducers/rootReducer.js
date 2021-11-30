import { commentsReducer } from "./commentsReducer";
import { loginReducer } from "./loginReducer";
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  comments: commentsReducer,
  login: loginReducer,
})

