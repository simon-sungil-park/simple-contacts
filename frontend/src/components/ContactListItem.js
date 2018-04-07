import React from 'react';
import PropTypes from 'prop-types';
import './ContactListItem.css';

const ContactListItem = ({ contact, showDetail }) => {
  return (
    <div className="col-sm-6 col-md-4">
      <div className="card contact" onClick={()=>showDetail(contact.id)}>
        <div className="card-body">
          <span className="firstname">{contact.firstname}</span>
          <span className="lastname">{contact.lastname}</span>
          <p className="m-0">
              {
                contact.tags ? 
                  contact.tags.split(',').map((tag, i)=>(
                    <span key={i} className="badge badge-pill badge-secondary mr-1">{tag}</span>
                  )) : 
                  <span className="badge badge-empty">.</span>
              }
            </p>
        </div>
      </div>
    </div>
  )
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired
  }).isRequired,
  showDetail: PropTypes.func.isRequired
}

export default ContactListItem;