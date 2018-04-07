import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './TagInput.css';

class TagInput extends Component {
  constructor() {
    super();

    this.state = {
			multiValue: [],
			options: [
			],
    };
  }

  handleChange = (value) => {
    this.setState({ multiValue: value });
  }

  render() {
    return (
      <Select.Creatable
        multi={true}
        options={this.state.options}
        onChange={this.handleChange}
        value={this.state.multiValue}
        placeholder="Tags"
      />
    )
  }
}

TagInput.propTypes = {
}

export default TagInput;