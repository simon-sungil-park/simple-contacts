import { createAction, handleActions } from 'redux-actions';

const FETCH_CONTACTS = 'simple-contacts/FETCH_CONTACTS';

export const fetchContacts = createAction(FETCH_CONTACTS);

const initialState = {};

export default handleActions(
  {
    [FETCH_CONTACTS]: (state, action) => state
  },
  initialState
);
