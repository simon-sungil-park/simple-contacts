import React from 'react';

const style = {
  backgroundColor: '#218bb1',
  marginBottom: '1em'
}

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark" style={style}>
      <span className="navbar-brand mb-0 h1">Simple Contacts</span>
    </nav>
  )
}

export default Navbar;