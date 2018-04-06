import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {

  handleSubmit = (evt) => {
    evt.preventDefault();
    
    const contact = {
      firstname: evt.target.firstname.value,
      lastname: evt.target.lastname.value,
      phone: evt.target.phone.value,
      email: evt.target.email.value
    }

    this.props.saveContact(contact);
  }

  render() {

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">First Name</label>
            <div className="col-sm-10">
              <input type="text" name="firstname" className="form-control" placeholder="First Name" required />
            </div>
          </div>
  
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Last Name</label>
            <div className="col-sm-10">
              <input type="text" name="lastname" className="form-control" placeholder="Last Name" required />
            </div>
          </div>
  
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Phone</label>
            <div className="col-sm-10">
              <input type="tel" name="phone" className="form-control" placeholder="Phone" required />
            </div>
          </div>
  
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" name="email" className="form-control" placeholder="Email" required />
            </div>
          </div>
  
          <div className="form-group row">
            <div className="col-sm-2"></div>
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary mr-2">Save</button>
              <button className="btn btn-secondary" 
                      onClick={this.props.cancelEdit}
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
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired
  }),
  cancelEdit: PropTypes.func.isRequired,
  saveContact: PropTypes.func.isRequired
}

export default ContactForm;