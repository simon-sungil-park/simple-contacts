import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ContactDetail.css';
import * as moment from 'moment';
import { Modal } from 'reactstrap';


class ContactDetail extends Component {
  constructor() {
    super();

    this.state = {
      isOpenConfirm: false
    };
  }

  openConfirm = () => {
    this.setState({
      isOpenConfirm: true
    });
  }

  closeConfirm = () => {
    this.setState({
      isOpenConfirm: false
    });
  }

  confirmDelete = () => {
    this.props.deleteContact(this.props.contact.id);
  }

  render() {
    const { contact, showList, editContact } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="name m-0">{`${contact.firstname} ${contact.lastname}`}</h3>
            <p className="m-0">
              {
                contact.tags ? 
                  contact.tags.split(',').map((tag, i)=>(
                    <span key={i} className="badge badge-pill badge-secondary mr-1">{tag}</span>
                  )) : 
                  ''
              }
            </p>
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
          <button className="btn btn-danger mr-2" onClick={this.openConfirm}>
            <i className="fas fa-trash"></i> Delete
          </button>
        </div>
        <div className="mt-4">
          <button className="btn btn-secondary mr-2" onClick={()=>showList()} >
          <i className="fas fa-chevron-left"></i> Back to List
          </button>
        </div>

        <div>
          <Modal isOpen={this.state.isOpenConfirm} toggle={this.closeConfirm} >
            <div class="modal-body">
              Are you sure?
            </div>
            <div class="modal-footer">
              <button className="btn btn-primary mr-2" onClick={this.confirmDelete}>Yes</button>
              <button className="btn btn-secondary" onClick={this.closeConfirm}>No</button>
            </div>
          </Modal>
        </div>        
      </div>
    )
  }
} 

ContactDetail.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    tags: PropTypes.string
  }).isRequired,
  showList: PropTypes.func.isRequired,
  editContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired
}

export default ContactDetail;