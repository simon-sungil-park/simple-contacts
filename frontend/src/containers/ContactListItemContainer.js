import React, { Component } from 'react';
import ContactListItem from '../components/ContactListItem';
import { withRouter } from 'react-router-dom';


class ContactListItemContainer extends Component {

  showDetail = (contactId) => {
    this.props.history.push(`/detail/${contactId}`);
  }

  render() {
    return <ContactListItem 
              contact={this.props.contact} 
              showDetail={this.showDetail} 
           />
  }
}

export default withRouter(ContactListItemContainer);
