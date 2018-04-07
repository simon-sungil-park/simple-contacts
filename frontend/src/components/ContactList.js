import React from 'react';
import PropTypes from 'prop-types';
import SearchBarContainer from '../containers/SearchBarContainer';
import OrderBarContainer from '../containers/OrderBarContainer';
import ContactListItemContainer from '../containers/ContactListItemContainer';

const ContactList = ({ contacts, addContact }) => {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-md-2 mb-3" >
          <button className="btn btn-outline-secondary w-100" onClick={()=>addContact()} >
            <i className="fas fa-plus"></i> New
          </button>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
          <SearchBarContainer />
        </div>
        <div className="col-sm-6 offset-md-2 col-md-4 ">
          <OrderBarContainer />
        </div>
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
      updated_at: PropTypes.string.isRequired,
      tags: PropTypes.string
    }).isRequired
  ).isRequired,
  addContact: PropTypes.func.isRequired
}

export default ContactList;