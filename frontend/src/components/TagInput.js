import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './TagInput.css';

class TagInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.defaultTags ? 
                props.defaultTags.split(',')
                                 .map(tag => ({ value:tag, label:tag })) : 
                [],
      options: props.defaultOptions ? 
                  props.defaultOptions.map(option => ({ value:option, label:option })) : 
                  []
    };
  }

  handleChange = (value) => {
    this.setState({ 
      value: value
    });

    this.props.updateTags(
      value.map(sel => sel.value).join(','), 
      this.state.options.map(option => option.value)
    );
  }

  render() {
    return (
      <Select.Creatable
        multi={true}
        options={this.state.options}
        value={this.state.value}
        onChange={this.handleChange}
        promptTextCreator={(label) => `Create tag "${label}"`}
        placeholder="Tags.."
        isOptionUnique={ ({option, options, labelKey, valueKey}) => {
          let flag = true;
          options.forEach(select => {
            if (select.value.toLowerCase() === option.value.toLowerCase()) {
              flag = false 
            }
          });
          return flag;
        }}
      />
    )
  }
}

TagInput.propTypes = {
  defaultTags: PropTypes.string,
  defaultOptions: PropTypes.arrayOf(PropTypes.string.isRequired),
  updateTags: PropTypes.func.isRequired
}

export default TagInput;


//Searches for any matching option within the set of options. 
//This function prevents duplicate options from being created. 
//By default this is a basic, case-sensitive comparison of label and value. 
//Expected signature: ({ option: Object, options: Array, labelKey: string, valueKey: string }): boolean