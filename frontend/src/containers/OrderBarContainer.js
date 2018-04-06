import OrderBar from '../components/OrderBar';
import { connect } from 'react-redux';
import * as filtersActions from '../modules/filters';

const mapStateToProps = (state) => ({
  sortOrder: state.filters.sortOrder
});

const mapDispatchToProps = (dispatch) => ({
  setSortOrder: (order) => dispatch(filtersActions.setSortOrder(order))
});

const OrderBarContatiner = connect(mapStateToProps, mapDispatchToProps)(OrderBar);

export default OrderBarContatiner;