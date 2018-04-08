import React, { Component } from 'react';
import ContactDetail from '../components/ContactDetail';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as contactsActions from '../modules/contacts';
import { toast } from 'react-toastify';

const mapStateToProps = (state) => ({
  contacts: state.contacts.data,
  pendingFetch: state.contacts.pendingFetch,
  pendingDelete: state.contacts.pendingDelete,
  error: state.contacts.error
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (contactId) => dispatch(contactsActions.deleteContact(contactId))
});

class ContactDetailContatiner extends Component {
  constructor() {
    super();
    this.state = {
      isWaiting: false
    }
  }
  
  showList = () => {
    this.props.history.push('/');
  }

  editContact = (contactId) => {
    this.props.history.push(`/edit/${contactId}`);
  }

  deleteContact = (contactId) => {
    this.setState({
      isWaiting: true
    }); 
    this.props.deleteContact(contactId);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.isWaiting && !nextProps.pendingDelete) {
      if (!nextProps.error) {
        toast.info('Delete done');
      }
      else {
        toast.error('Delete failed');
      }
      this.props.history.push('/');
    }
  }

  render() {
    if (this.props.pendingFetch || this.props.contacts.length === 0) {
      return <div></div>
    }

    const contactId = this.props.match.params.contactId;
    const contact = this.props.contacts.find(contact => String(contact.id) === contactId);

    if (!contact) {
      return <Redirect to="/" />
    }

    return <ContactDetail 
              contact={contact}
              showList={this.showList}
              editContact={this.editContact}              
              deleteContact={this.deleteContact}
           />
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ContactDetailContatiner)
);