import React, { Component } from 'react';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as contactsActions from '../modules/contacts';
import Navbar from '../components/Navbar';
import ContactListContainer from '../containers/ContactListContainer';
import ContactDetailContainer from '../containers/ContactDetailContainer';
import ContactForm from '../components/ContactForm';

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(contactsActions.fetchContacts())
})

class App extends Component {

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" render={()=><ContactListContainer />} />
          <Route path="/detail/:contactId" render={()=><ContactDetailContainer />} />
          <Route path="/new" render={()=><ContactForm />} />
          <Route path="/edit/:contactId" render={()=><ContactForm />} />
          <Route render={()=><Redirect to="/" />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
