import ContactList from '../components/ContactList';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  contacts: state.contacts.data
});

const ContactListContatiner = 
        withRouter(connect(mapStateToProps)(ContactList));

export default ContactListContatiner;
