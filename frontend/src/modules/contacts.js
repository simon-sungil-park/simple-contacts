import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';

const FETCH_CONTACTS = 'simple-contacts/FETCH_CONTACTS';
const FETCH_CONTACTS_PENDING = 'simple-contacts/FETCH_CONTACTS_PENDING';
const FETCH_CONTACTS_FULFILLED = 'simple-contacts/FETCH_CONTACTS_FULFILLED';
const FETCH_CONTACTS_REJECTED = 'simple-contacts/FETCH_CONTACTS_REJECTED';

export const fetchContacts = () => ({
  type: FETCH_CONTACTS,
  payload: axios.get('/api/contact')
})

const initialState = {
  pending: false,
  error: false,
  data: []
};

export default handleActions(
  {
    [FETCH_CONTACTS_PENDING]: (state, action) => (
      {
        ...state,
        pending: true,
        error: false
      }
    ),
    [FETCH_CONTACTS_FULFILLED]: (state, action) => (
      {
        ...state,
        pending: false,
        data: action.payload.data.contacts
      }
    ),
    [FETCH_CONTACTS_REJECTED]: (state, action) => (
      {
        ...state,
        pending: false,
        error: true
      }
    )    
  },
  initialState
);
