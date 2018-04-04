import { createStore, applyMiddleware } from 'redux';
import reducers from '../modules';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk, promiseMiddleware()))
);

export default store;