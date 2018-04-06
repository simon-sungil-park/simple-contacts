import { combineReducers } from 'redux';
import contacts from './contacts';
import filters from './filters';

export default combineReducers({
    contacts,
    filters
});
