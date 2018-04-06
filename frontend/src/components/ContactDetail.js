import React from 'react';
import PropTypes from 'prop-types';
import './ContactDetail.css';
import * as moment from 'moment';

const ContactDetail = ({ contact, showList, editContact, deleteContact }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3 className="name my-1">{`${contact.firstname} ${contact.lastname}`}</h3>
          <p className="updated">{'Updated ' + moment(contact.updated_at).fromNow()}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-2 item-label">
          Phone
        </div>
        <div className="col-10 item-content">
          {contact.phone}
        </div>
      </div>

      <div className="row">
        <div className="col-2 item-label">
          Email
        </div>
        <div className="col-10 item-content">
          {contact.email}
        </div>
      </div>

      <div className="mt-5">
        <button className="btn btn-info mr-2" onClick={()=>editContact(contact.id)}>
          <i className="fas fa-edit"></i> Edit
        </button>
        <button className="btn btn-danger mr-2" onClick={()=>deleteContact(contact.id)}>
          <i className="fas fa-trash"></i> Delete
        </button>
      </div>
      <div className="mt-4">
        <button className="btn btn-secondary mr-2" onClick={()=>showList()} >
        <i className="fas fa-chevron-left"></i> Back to List
        </button>
      </div>

    </div>
  )
}

ContactDetail.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired
  }).isRequired,
  showList: PropTypes.func.isRequired,
  editContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired
}

export default ContactDetail;