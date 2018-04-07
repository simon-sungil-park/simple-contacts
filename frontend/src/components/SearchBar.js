import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {

  handleChange = (evt) => {
    this.props.setSearchFilter(evt.target.value);
  }

  handleClear = () => {
    this.props.setSearchFilter('');
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
               value={this.props.searchFilter}
               onChange={this.handleChange}
               className="form-control" placeholder="name | tag" 
        />
        <div className="input-group-append" onClick={this.handleClear}>
          <button className="btn btn-outline-secondary">
            <i className="fas fa-times"></i>
          </button>
        </div>        
      </div>
    )
  }
}

SearchBar.propTypes = {
  searchFilter: PropTypes.string.isRequired,
  setSearchFilter: PropTypes.func.isRequired
}

export default SearchBar;