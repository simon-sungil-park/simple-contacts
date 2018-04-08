import React from 'react';
import PropTypes from 'prop-types';
import './ContactListItem.css';

const ContactListItem = ({ contact, showDetail }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card contact mb-sm-4 mb-2" onClick={()=>showDetail(contact.id)}>
        <div className="row no-gutters h-100">
          <div className="col-3">
            <img className="w-100 rounded" alt={contact.firstname}
              src={
                contact.image_id ? 
                  `/api/image/${contact.image_id}.jpg` :
                  '/images/default.jpg'
              }
             />
          </div>
          <div className="col-9 my-auto px-3">
            <div className="mb-3">
              <span className="firstname">{contact.firstname}</span>
              <span className="lastname">{contact.lastname}</span>
            </div>
            <div className="d-flex justify-content-end">
              {
                contact.tags ? 
                  contact.tags.split(',').map((tag, i)=>(
                    <span key={i} className="badge badge-pill badge-secondary mr-1">{tag}</span>
                  )) : 
                  <span className="badge badge-empty">.</span>
              }
            </div>
          </div>
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
    updated_at: PropTypes.string.isRequired,
    tags: PropTypes.string,
    image_id: PropTypes.number
  }).isRequired,
  showDetail: PropTypes.func.isRequired
}

export default ContactListItem;