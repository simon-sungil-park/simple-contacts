import React, { Component } from 'react';
import ContactList from '../components/ContactList';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  contacts: state.contacts.data
});

class ContactListContatiner extends Component {
  addContact = () => {
    this.props.history.push('/new');
  }

  render() {
    return (
      <ContactList 
        contacts={this.props.contacts}
        addContact={this.addContact}
      />
    )
  }
}

export default withRouter(connect(mapStateToProps)(ContactListContatiner));