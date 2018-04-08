import React, { Component } from 'react';
import ContactForm from '../components/ContactForm';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as contactsActions from '../modules/contacts';
import { toast } from 'react-toastify';

const mapStateToProps = (state) => ({
  contacts: state.contacts.data,
  pendingFetch: state.contacts.pendingFetch,
  pendingUpdate: state.contacts.pendingUpdate,
  error: state.contacts.error,
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

  componentWillUpdate(nextProps, nextState) {
    if (nextState.isWaiting && !nextProps.pendingUpdate) {
      if (!nextProps.error) {
        toast.info('Update done');
      }
      else {
        toast.error('Update failed');
      }
      this.props.history.push('/');
    }
  }

  render() {
    if (this.props.pendingFetch || this.props.contacts.length === 0) {
      return <div></div>
    }

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