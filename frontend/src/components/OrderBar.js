import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OrderBar extends Component {

  handleChange = (evt) => {
  }

  render() {
    return (
      <select 
        className="form-control"  
        defaultValue="first-name-a-z"
        onChange={this.handleChange} 
      >
        <option value="first-name-a-z">First Name: A to Z</option>
        <option value="first-name-z-a">First Name: Z to A</option>
        <option value="last-name-a-z">Last Name: A to Z</option>
        <option value="last-name-z-a">Last Name: Z to A</option>
        <option value="updated-new-old">Updated: New to Old</option>
        <option value="updated-old-new">Updated: Old to New</option>
      </select>    
    )
  }
}

OrderBar.propTypes = {
}

export default OrderBar;