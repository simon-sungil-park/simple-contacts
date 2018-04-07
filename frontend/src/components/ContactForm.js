import React, { Component } from 'react';
import TagInput from './TagInput'
import PropTypes from 'prop-types';

class ContactForm extends Component {
  constructor() {
    super();

    this.state = {
      selectedTags: '',
      optionArray: ['Work', 'Home']
    };
  }  

  handleSubmit = (evt) => {
    evt.preventDefault();

    let contact;

    if (this.props.isNew) {
      contact = {
        firstname: evt.target.firstname.value,
        lastname: evt.target.lastname.value,
        phone: evt.target.phone.value,
        email: evt.target.email.value,
        tags: this.state.selectedTags
      }
    }
    else {
      contact = {
        ...this.props.contact,
        firstname: evt.target.firstname.value,
        lastname: evt.target.lastname.value,
        phone: evt.target.phone.value,
        email: evt.target.email.value,
        tags: this.state.selectedTags
      }
    }

    this.props.saveContact(contact);
  }

  updateTags = (tags, options) => {
    this.setState({
      selectedTags: tags,
      optionArray: options
    });
  }

  render() {

    const { contact, isNew, cancelEdit } = this.props;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">First Name</label>
            <div className="col-sm-10">
              <input type="text" name="firstname" 
                     defaultValue={isNew ? '' : contact.firstname} 
                     className="form-control" placeholder="First Name" required 
              />
            </div>
          </div>
  
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Last Name</label>
            <div className="col-sm-10">
              <input type="text" name="lastname" 
                     defaultValue={isNew ? '' : contact.lastname} 
                     className="form-control" placeholder="Last Name" required />
            </div>
          </div>
  
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Phone</label>
            <div className="col-sm-10">
              <input type="tel" name="phone" 
                     defaultValue={isNew ? '' : contact.phone} 
                     className="form-control" placeholder="Phone" required />
            </div>
          </div>
  
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" name="email" 
                     defaultValue={isNew ? '' : contact.email} 
                     className="form-control" placeholder="Email" required />
            </div>
          </div>
  
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Tags</label>
            <div className="col-sm-10">
              <TagInput defaultTags={isNew ? '' : contact.tags} 
                        defaultOptions={this.state.optionArray} 
                        updateTags={this.updateTags}
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-2"></div>
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary mr-2">Save</button>
              <button className="btn btn-secondary" 
                      onClick={(e)=>{
                        e.preventDefault();
                        cancelEdit();
                      }}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

ContactForm.propTypes = {
  isNew: PropTypes.bool,
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    tags: PropTypes.string
  }),
  cancelEdit: PropTypes.func.isRequired,
  saveContact: PropTypes.func.isRequired
}

export default ContactForm;