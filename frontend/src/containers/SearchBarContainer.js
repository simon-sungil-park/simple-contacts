import SearchBar from '../components/SearchBar';
import { connect } from 'react-redux';
import * as filtersActions from '../modules/filters';

const mapDispatchToProps = (dispatch) => ({
  setSearchFilter: (filter) => dispatch(filtersActions.setSearchFilter(filter))
});

const SearchBarContatiner = connect(null, mapDispatchToProps)(SearchBar);

export default SearchBarContatiner;