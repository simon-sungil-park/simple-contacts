import React, { Component } from 'react';
import ContactDetail from '../components/ContactDetail';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as contactsActions from '../modules/contacts';

const mapStateToProps = (state) => ({
  contacts: state.contacts.data
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (contactId) => dispatch(contactsActions.deleteContact(contactId))
});

class ContactDetailContatiner extends Component {

  showList = () => {
    this.props.history.push('/');
  }

  deleteContact = (contactId) => {
    this.props.deleteContact(contactId);
  }

  render() {

    const contactId = this.props.match.params.contactId;
    const contact = this.props.contacts.find(contact => String(contact.id) === contactId);

    if (!contact) {
      return (
        <Redirect to="/" />
      )
    }

    return <ContactDetail 
              contact={contact}
              showList={this.showList}
              deleteContact={this.deleteContact}
           />
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactDetailContatiner));