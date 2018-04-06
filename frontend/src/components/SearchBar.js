import React, { Component } from 'react';

const style = {
  backgroundColor: '#218bb1',
  marginBottom: '3em'
}


class SearchBar extends Component {

  render() {
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fas fa-search"></i>
          </span>
        </div>
        <input type="text" className="form-control" placeholder="Search..." />
      </div>
    )
  }
}

export default SearchBar;