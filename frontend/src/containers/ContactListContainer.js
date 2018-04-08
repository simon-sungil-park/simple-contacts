import React, { Component } from 'react';
import ContactList from '../components/ContactList';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as moment from 'moment';

const mapStateToProps = (state) => {
  const contacts = state.contacts.data;
  const { searchFilter, sortOrder } = state.filters;

  const filteredContacts = 
    searchFilter === '' ? 
      contacts :
      contacts.filter(contact => (
        `${contact.firstname} ${contact.lastname} ${contact.tags}`
        .toLowerCase()
        .includes(searchFilter.toLowerCase())
      ));

  let sortFunc;

  switch(sortOrder) {
    case 'firstname-a-z': 
      sortFunc = (a, b) => (
        `${a.firstname}${a.lastname}`
          .localeCompare(`${b.firstname}${b.lastname}`)
      );
      break;

    case 'firstname-z-a': 
      sortFunc = (a, b) => (
        `${b.firstname}${b.lastname}`
          .localeCompare(`${a.firstname}${a.lastname}`)
      );
      break;

    case 'lastname-a-z': 
      sortFunc = (a, b) => (
        `${a.lastname}${a.firstname}`
          .localeCompare(`${b.lastname}${b.firstname}`)
      );
      break;

    case 'lastname-z-a': 
      sortFunc = (a, b) => (
        `${b.lastname}${b.firstname}`
          .localeCompare(`${a.lastname}${a.firstname}`)
      );
      break;

    case 'updated-new-old': 
      sortFunc = (a, b) => (
        moment(b.updated_at) - moment(a.updated_at)
      );
      break;

    case 'updated-old-new': 
      sortFunc = (a, b) => (
        moment(a.updated_at) - moment(b.updated_at)
      );
      break;

    default:
      sortFunc = (a, b) => {};
  }

  return (
    {
      contacts: filteredContacts.sort(sortFunc),
      searchFilter: searchFilter,
      sortOrder: sortOrder
    }  
  )
}

class ContactListContatiner extends Component {
  addContact = () => {
    this.props.history.push('/new');
  }

  render() {
    return (
      <ContactList 
        contacts={this.props.contacts}
        addContact={this.addContact}
        searchFilter={this.props.searchFilter}
      />
    )
  }
}

export default withRouter(connect(mapStateToProps)(ContactListContatiner));