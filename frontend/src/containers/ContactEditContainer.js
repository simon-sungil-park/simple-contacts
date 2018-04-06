import React, { Component } from 'react';
import ContactForm from '../components/ContactForm';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as contactsActions from '../modules/contacts';

const mapStateToProps = (state) => ({
  pendingAdd: state.contacts.pendingAdd
});

const mapDispatchToProps = (dispatch) => ({
  addContact: (contact) => dispatch(contactsActions.addContact(contact))
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

  addContact = (contact) => {
    this.setState({
      isWaiting: true
    })
    this.props.addContact(contact);

  }

  render() {
    if (this.state.isWaiting && !this.pendingAdd) {
      return (
        <Redirect to="/" />
      )
    }

    return <ContactForm 
              cancelEdit={this.showList}
              saveContact={this.addContact}
           />
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ContactEditContatiner)
);