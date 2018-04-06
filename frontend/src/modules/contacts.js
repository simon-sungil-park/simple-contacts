import { handleActions } from 'redux-actions';
import axios from 'axios';

const FETCH_CONTACTS = 'simple-contacts/FETCH_CONTACTS';
const FETCH_CONTACTS_PENDING = 'simple-contacts/FETCH_CONTACTS_PENDING';
const FETCH_CONTACTS_FULFILLED = 'simple-contacts/FETCH_CONTACTS_FULFILLED';
const FETCH_CONTACTS_REJECTED = 'simple-contacts/FETCH_CONTACTS_REJECTED';

const ADD_CONTACT = 'simple-contacts/ADD_CONTACT';
const ADD_CONTACT_PENDING = 'simple-contacts/ADD_CONTACT_PENDING';
const ADD_CONTACT_FULFILLED = 'simple-contacts/ADD_CONTACT_FULFILLED';
const ADD_CONTACT_REJECTED = 'simple-contacts/ADD_CONTACT_REJECTED';

const UPDATE_CONTACT = 'simple-contacts/UPDATE_CONTACT';
const UPDATE_CONTACT_PENDING = 'simple-contacts/UPDATE_CONTACT_PENDING';
const UPDATE_CONTACT_FULFILLED = 'simple-contacts/UPDATE_CONTACT_FULFILLED';
const UPDATE_CONTACT_REJECTED = 'simple-contacts/UPDATE_CONTACT_REJECTED';

const DELETE_CONTACT = 'simple-contacts/DELETE_CONTACT';
const DELETE_CONTACT_PENDING = 'simple-contacts/DELETE_CONTACT_PENDING';
const DELETE_CONTACT_FULFILLED = 'simple-contacts/DELETE_CONTACT_FULFILLED';
const DELETE_CONTACT_REJECTED = 'simple-contacts/DELETE_CONTACT_REJECTED';

export const fetchContacts = () => ({
  type: FETCH_CONTACTS,
  payload: axios.get('/api/contact')
})

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: axios.post('/api/contact/', contact)
})

export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: axios.put('/api/contact/' + contact.id, contact)
})

export const deleteContact = (contactId) => ({
  type: DELETE_CONTACT,
  payload: axios.delete('/api/contact/' + contactId)
})

const initialState = {
  pendingFetch: false,
  pendingAdd: false,
  pendingUpdate: false,
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
    [ADD_CONTACT_PENDING]: (state, action) => (
      {
        ...state,
        pendingAdd: true,
        error: false
      }
    ),
    [ADD_CONTACT_FULFILLED]: (state, action) => (
      {
        ...state,
        pendingFetch: false,
        data: [...state.data, action.payload.data.contact]
      }
    ),
    [ADD_CONTACT_REJECTED]: (state, action) => (
      {
        ...state,
        pendingAdd: false,
        error: true
      }
    ),    
    [UPDATE_CONTACT_PENDING]: (state, action) => (
      {
        ...state,
        pendingUpdate: true,
        error: false
      }
    ),
    [UPDATE_CONTACT_FULFILLED]: (state, action) => {
      const filteredContacts = 
            state.data.filter(contact => 
              contact.id !== action.payload.data.contact.id);

      return ({
        ...state,
        pendingDelete: false,
        data: [...filteredContacts, action.payload.data.contact]
      })
    },
    [UPDATE_CONTACT_REJECTED]: (state, action) => (
      {
        ...state,
        pendingUpdate: false,
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
            state.data.filter(contact => 
              contact.id !== action.payload.data.deletedId);

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
