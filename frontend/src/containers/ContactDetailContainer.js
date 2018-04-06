import React, { Component } from 'react';
import ContactDetail from '../components/ContactDetail';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  contacts: state.contacts.data
});

class ContactDetailContatiner extends Component {

  showList = () => {
    this.props.history.push('/');
  }

  render() {

    const contactId = this.props.match.params.contactId;
    const contact = this.props.contacts.find(contact => String(contact.id) === contactId);

    if (!contact) {
      return (<p>Not Found</p>);
    }

    return <ContactDetail 
              contact={contact}
              showList={this.showList}
           />
  }
}

export default withRouter(connect(mapStateToProps)(ContactDetailContatiner));