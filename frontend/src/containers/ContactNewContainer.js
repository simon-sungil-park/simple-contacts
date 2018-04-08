import React, { Component } from 'react';
import ContactForm from '../components/ContactForm';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as contactsActions from '../modules/contacts';
import { toast } from 'react-toastify';

const mapStateToProps = (state) => ({
  pendingFetch: state.contacts.pendingFetch,
  pendingAdd: state.contacts.pendingAdd,
  error: state.contacts.error,
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

  componentWillUpdate(nextProps, nextState) {
    if (nextState.isWaiting && !nextProps.pendingAdd) {
      if (!nextProps.error) {
        toast.info('Create done');
      }
      else {
        toast.error('Create failed');
      }
      this.props.history.push('/');
    }
  }

  render() {
    if (this.props.pendingFetch) {
      return <div></div>
    }

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