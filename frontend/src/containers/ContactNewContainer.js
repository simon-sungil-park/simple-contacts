import React, { Component } from 'react';
import ContactForm from '../components/ContactForm';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as contactsActions from '../modules/contacts';

const mapStateToProps = (state) => ({
  pendingAdd: state.contacts.pendingAdd,
  tagList: state.contacts.tagList
});

const mapDispatchToProps = (dispatch) => ({
  addContact: (contact) => dispatch(contactsActions.addContact(contact))
});

class ContactNewContatiner extends Component {

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

  componentWillUpdate() {
    if (this.state.isWaiting && !this.pendingAdd) {
      this.props.history.push('/');
    }
  }

  render() {
    return <ContactForm 
              isNew={true}
              cancelEdit={this.showList}
              saveContact={this.addContact}
              tagList={this.props.tagList}
           />
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ContactNewContatiner)
);