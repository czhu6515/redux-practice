import React from 'react'
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './Reducers/index';
import {books} from './books.js'

//default state of app
const defaultState = {
  bookList: books,
  currentBook: books[0]
}

//user browser history
export const history = createHistory()

//middleware forintercepting and dispatching navigation actions
export const middleware = routerMiddleware(history);

//creating our store
const store = createStore(rootReducer, defaultState, applyMiddleware(middleware))


export default {store, defaultState}