import React from 'react';
import { withRouter } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ history }) => {
  return (
    <nav className="navbar navbar-dark navbar-custom">
      <span className="navbar-brand mb-0 h1"
            onClick={()=>(history.push('/'))}
      >
      Simple Contacts</span>
    </nav>
  )
}

export default withRouter(Navbar);