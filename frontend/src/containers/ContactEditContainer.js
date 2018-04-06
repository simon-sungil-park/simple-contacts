import React, { Component } from 'react';
import ContactForm from '../components/ContactForm';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as contactsActions from '../modules/contacts';

const mapStateToProps = (state) => ({
  contacts: state.contacts.data,
  pendingUpdate: state.contacts.pendingUpdate
});

const mapDispatchToProps = (dispatch) => ({
  updateContact: (contact) => dispatch(contactsActions.updateContact(contact))
});

class ContactEditContatiner extends Component {

  constructor() {
    super();
    this.state = {
      isWaiting: false
    }
  }

  showList = () => {
    this.props.history.push('/');
  }

  updateContact = (contact) => {
    this.setState({
      isWaiting: true
    })
    this.props.updateContact(contact);
  }

  render() {
    const contactId = this.props.match.params.contactId;
    const contact = this.props.contacts.find(contact => String(contact.id) === contactId);

    if (!contact) {
      return (
        <Redirect to="/" />
      )
    }

    if (this.state.isWaiting && !this.pendingUpdate) {
      return (
        <Redirect to="/" />
      )
    }

    return <ContactForm 
              isNew={false}
              contact={contact}
              cancelEdit={this.showList}
              saveContact={this.updateContact}
           />
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ContactEditContatiner)
);