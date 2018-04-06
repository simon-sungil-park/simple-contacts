import { createAction, handleActions } from 'redux-actions';

const SET_SEARCHFILTER = 'simple-contacts/SET_SEARCHFILTER';
const SET_SORTORDER = 'simple-contacts/SET_SORTORDER';

export const setSearchFilter = createAction(SET_SEARCHFILTER);
export const setSortOrder = createAction(SET_SORTORDER);

const initialState = {
  searchFilter: '',
  sortOrder: 'firstname-a-z'
};

export default handleActions({
  [SET_SEARCHFILTER]: (state, action) => (
    {
      ...state,
      searchFilter: action.payload
    }
  ),
  [SET_SORTORDER]: (state, action) => (
    {
      ...state,
      sortOrder: action.payload
    }
  )
}, initialState);
