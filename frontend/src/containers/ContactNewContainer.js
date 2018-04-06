import React, { Component } from 'react';
import ContactForm from '../components/ContactForm';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as contactsActions from '../modules/contacts';

const mapStateToProps = (state) => ({
  contacts: state.contacts.data
});

const mapDispatchToProps = (dispatch) => ({
  
});

class ContactNewContatiner extends Component {

  showList = () => {
    this.props.history.push('/');
  }

  addContact = (contact) => {
  }

  render() {
    return <ContactForm 
              cancelEdit={this.showList}
              saveContact={this.addContact}
           />
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactNewContatiner));