import { createStore, applyMiddleware } from 'redux';
import reducers from '../modules';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

const store = createStore(
  reducers,
  applyMiddleware(ReduxThunk, promiseMiddleware())
);

export default store;