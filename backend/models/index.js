const knexfile = require('../knexfile');
const knex = require('knex')(knexfile);
const bookshelf = require('bookshelf')(knex);

const Contacts = bookshelf.Model.extend({
  tableName: 'contacts'
});

exports.getContacts = () => {
  return new Promise( (resolve, reject) => {
    Contacts.fetchAll()
      .then(contacts => {
        resolve(
          contacts.models.map(contact => {
            return {
              ...contact.attributes
            }
          })
        )
      })
      .catch(error => {
        reject(error)
      });   
  })
}

exports.addContact = (contact) => {
  return new Promise( (resolve, reject) => {
    Contacts.forge(
      {
        ...contact
      }
    )
    .save()
    .then(savedContact => {
      return savedContact.fetch();
    })
    .then(savedContact => {
      resolve(savedContact);
    })
    .catch(error => {
      reject(error)
    });   
  })
}

exports.updateContact = (contact) => {

  const contactId = contact.id;
  const modifiedContact = {...contact};
  
  delete modifiedContact.id;
  delete modifiedContact.created_at;

  return new Promise( (resolve, reject) => {
    Contacts.forge({id: contact.id})
      .save(
        {
          ...modifiedContact,
          updated_at: new Date()
        }
      )
      .then(savedContact => {
        return savedContact.fetch();
      })
      .then(savedContact => {
        resolve(savedContact);
      })
      .catch(error => {
        reject(error)
      });   
  })
}

exports.removeContact = (contactId) => {
  return new Promise( (resolve, reject) => {
    Contacts.forge({id: contactId})
      .destroy()
      .then(result => {
        resolve(true);
      })
      .catch(error => {
        reject(error)
      });   
  })
}