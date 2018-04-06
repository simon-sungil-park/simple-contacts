import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';

const FETCH_CONTACTS = 'simple-contacts/FETCH_CONTACTS';
const FETCH_CONTACTS_PENDING = 'simple-contacts/FETCH_CONTACTS_PENDING';
const FETCH_CONTACTS_FULFILLED = 'simple-contacts/FETCH_CONTACTS_FULFILLED';
const FETCH_CONTACTS_REJECTED = 'simple-contacts/FETCH_CONTACTS_REJECTED';

const DELETE_CONTACT = 'simple-contacts/DELETE_CONTACT';
const DELETE_CONTACT_PENDING = 'simple-contacts/DELETE_CONTACT_PENDING';
const DELETE_CONTACT_FULFILLED = 'simple-contacts/DELETE_CONTACT_FULFILLED';
const DELETE_CONTACT_REJECTED = 'simple-contacts/DELETE_CONTACT_REJECTED';

export const fetchContacts = () => ({
  type: FETCH_CONTACTS,
  payload: axios.get('/api/contact')
})

export const deleteContact = (contactId) => ({
  type: DELETE_CONTACT,
  payload: axios.delete('/api/contact/' + contactId)
})

const initialState = {
  pendingFetch: false,
  pendingDelete: false,
  error: false,
  data: []
};

export default handleActions(
  {
    [FETCH_CONTACTS_PENDING]: (state, action) => (
      {
        ...state,
        pendingFetch: true,
        error: false
      }
    ),
    [FETCH_CONTACTS_FULFILLED]: (state, action) => (
      {
        ...state,
        pendingFetch: false,
        data: action.payload.data.contacts
      }
    ),
    [FETCH_CONTACTS_REJECTED]: (state, action) => (
      {
        ...state,
        pendingFetch: false,
        error: true
      }
    ),    
    [DELETE_CONTACT_PENDING]: (state, action) => (
      {
        ...state,
        pendingDelete: true,
        error: false
      }
    ),
    [DELETE_CONTACT_FULFILLED]: (state, action) => {
      const filteredContacts = 
            state.data.filter(contact => contact.id !== action.payload.data.deletedId);

      return ({
        ...state,
        pendingDelete: false,
        data: filteredContacts
      })
    },
    [DELETE_CONTACT_REJECTED]: (state, action) => (
      {
        ...state,
        pendingDelete: false,
        error: true
      }
    )    
  },
  initialState
);
