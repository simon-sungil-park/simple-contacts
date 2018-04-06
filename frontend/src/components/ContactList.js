import React from 'react';
import PropTypes from 'prop-types';
import ContactListItemContainer from '../containers/ContactListItemContainer'

const ContactList = ({ contacts, addContact }) => {
  return (
    <div className="container">
      <div className="mb-3" >
        <button className="btn btn-primary" onClick={()=>addContact()} >
          <i className="fas fa-plus"></i>
        </button>
      </div>

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
  ).isRequired,
  addContact: PropTypes.func.isRequired
}

export default ContactList;