import React from 'react';
import PropTypes from 'prop-types';

const ContactDetail = ({ contact }) => {
  return (
    <div className="container">
      <p>{contact.firstname}</p>
      <p>{contact.lastname}</p>
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