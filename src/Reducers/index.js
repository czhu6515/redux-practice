import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import books from './books';
import currentBook from './currentBook';


const rootReducer = combineReducers({
  books, 
  currentBook, 
  routing: routerReducer });


export default rootReducer;