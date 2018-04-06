import { createAction, handleActions } from 'redux-actions';

const SET_SEARCHFILTER = 'simple-contacts/SET_SEARCHFILTER';

export const setSearchFilter = createAction(SET_SEARCHFILTER);

const initialState = {
  searchFilter: ''
};

export default handleActions({
  [SET_SEARCHFILTER]: (state, action) => (
    {
      ...state,
      searchFilter: action.payload
    }
  )
}, initialState);
