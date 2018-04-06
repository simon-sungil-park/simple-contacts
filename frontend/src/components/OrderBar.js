import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OrderBar extends Component {

  handleChange = (evt) => {
    this.props.setSortOrder(evt.target.value);
  }

  render() {
    return (
      <select 
        className="form-control"  
        defaultValue={this.props.sortOrder}
        onChange={this.handleChange} 
      >
        <option value="firstname-a-z">First Name: A to Z</option>
        <option value="firstname-z-a">First Name: Z to A</option>
        <option value="lastname-a-z">Last Name: A to Z</option>
        <option value="lastname-z-a">Last Name: Z to A</option>
        <option value="updated-new-old">Updated: New to Old</option>
        <option value="updated-old-new">Updated: Old to New</option>
      </select>    
    )
  }
}

OrderBar.propTypes = {
  sortOrder: PropTypes.string.isRequired,
  setSortOrder: PropTypes.func.isRequired
}

export default OrderBar;