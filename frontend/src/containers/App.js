import React, { Component } from 'react';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as contactsActions from '../modules/contacts';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactListContainer from './ContactListContainer';
import ContactDetailContainer from './ContactDetailContainer';
import ContactNewContainer from './ContactNewContainer'
import ContactEditContainer from './ContactEditContainer'

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
          <Route path="/new" render={()=><ContactNewContainer />} />
          <Route path="/edit/:contactId" render={()=><ContactEditContainer />} />
          <Route render={()=><Redirect to="/" />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
