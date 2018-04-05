import React from 'react';
import PropTypes from 'prop-types';
import ContactListItemContainer from '../containers/ContactListItemContainer'

const ContactList = ({ contacts }) => {
  return (
    <div className="container">
      <div className="row">
        {
          contacts.map((contact, i) => (
            <ContactListItemContainer key={i} contact={contact} />
          ))
        }
      </div>
    </div>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default ContactList;