import React, { Component } from 'react';
import ContactList from '../components/ContactList';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  contacts: state.contacts.data,
  searchFilter: state.filters.searchFilter
});

class ContactListContatiner extends Component {
  addContact = () => {
    this.props.history.push('/new');
  }

  render() {
    const { contacts, searchFilter } = this.props;

    const filteredContacts = searchFilter === '' ? 
      contacts :
      contacts.filter(contact => (
        `${contact.firstname} ${contact.lastname}`
        .toLowerCase()
        .includes(searchFilter.toLowerCase())
      ))

    return (
      <ContactList 
        contacts={filteredContacts}
        addContact={this.addContact}
      />
    )
  }
}

export default withRouter(connect(mapStateToProps)(ContactListContatiner));