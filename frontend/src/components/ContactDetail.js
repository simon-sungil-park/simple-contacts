import React from 'react';
import PropTypes from 'prop-types';
import './ContactDetail.css'



const ContactDetail = ({ contact }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="mr-5" >
          <h2 className="name">{`${contact.firstname} ${contact.lastname}`}</h2>
        </div>
        <div>
          <button className="btn btn-info mr-2">
            <i class="fas fa-edit"></i>
          </button>
          <button className="btn btn-danger">
            <i class="fas fa-minus"></i>
          </button>
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

      <button className="btn btn-secondary mt-5">
        Back
      </button>

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
  }).isRequired
}

export default ContactDetail;