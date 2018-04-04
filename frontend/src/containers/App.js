import React, { Component } from 'react';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ContactList from '../components/ContactList';
import ContactDetail from '../components/ContactDetail';
import ContactForm from '../components/ContactForm';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" render={()=><ContactList />} />
          <Route path="/detail/:contactId" render={()=><ContactDetail />} />
          <Route path="/new" render={()=><ContactForm />} />
          <Route path="/edit/:contactId" render={()=><ContactForm />} />
          <Route render={()=><Redirect to="/" />} />
        </Switch>
      </div>
    );
  }
}

export default App;
