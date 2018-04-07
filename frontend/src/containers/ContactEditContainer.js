import React, { Component } from 'react';
import ContactForm from '../components/ContactForm';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as contactsActions from '../modules/contacts';

const mapStateToProps = (state) => ({
  contacts: state.contacts.data,
  pendingUpdate: state.contacts.pendingUpdate,
  tagList: state.contacts.tagList
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

  showDetail = () => {
    this.props.history.goBack();
  }

  updateContact = (contact) => {
    this.setState({
      isWaiting: true
    })
    this.props.updateContact(contact);
  }

  componentWillUpdate() {
    if (this.state.isWaiting && !this.pendingUpdate) {
      this.props.history.goBack();
    }
  }

  render() {
    const contactId = this.props.match.params.contactId;
    const contact = this.props.contacts.find(contact => String(contact.id) === contactId);

    if (!contact) {
      return (
        <Redirect to="/" />
      )
    }

    return <ContactForm 
              isNew={false}
              contact={contact}
              cancelEdit={this.showDetail}
              saveContact={this.updateContact}
              tagList={this.props.tagList}
           />
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ContactEditContatiner)
);