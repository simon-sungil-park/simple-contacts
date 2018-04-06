import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {

  handleChange = (evt) => {
    this.props.setSearchFilter(evt.target.value);
  }

  render() {
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fas fa-search"></i>
          </span>
        </div>
        <input type="text" 
               onChange={this.handleChange}
               className="form-control" placeholder="Search..." 
        />
      </div>
    )
  }
}

SearchBar.propTypes = {
  setSearchFilter: PropTypes.func.isRequired
}

export default SearchBar;