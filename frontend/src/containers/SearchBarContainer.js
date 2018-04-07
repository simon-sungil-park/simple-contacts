import SearchBar from '../components/SearchBar';
import { connect } from 'react-redux';
import * as filtersActions from '../modules/filters';

const mapStateToProps = (state) => ({
  searchFilter: state.filters.searchFilter
});

const mapDispatchToProps = (dispatch) => ({
  setSearchFilter: (filter) => dispatch(filtersActions.setSearchFilter(filter))
});

const SearchBarContatiner = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default SearchBarContatiner;