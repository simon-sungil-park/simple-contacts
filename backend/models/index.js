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
      .catch(err => reject(err));   
  })
}

