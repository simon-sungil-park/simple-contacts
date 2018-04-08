const knexfile = require('../knexfile');
const knex = require('knex')(knexfile);
const bookshelf = require('bookshelf')(knex);

const Contacts = bookshelf.Model.extend({
  tableName: 'contacts'
});

const Images = bookshelf.Model.extend({
  tableName: 'images'
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
        resolve(contactId);
      })
      .catch(error => {
        reject(error)
      });   
  })
}

exports.addImage = (imageData) => {
  return new Promise( (resolve, reject) => {
    Images.forge(
      {
        data: imageData
      }
    )
    .save()
    .then(savedImage => {
      resolve(savedImage.id);
    })
    .catch(error => {
      reject(error)
    });   
  })
}

exports.updateImage = (image) => {
  return new Promise( (resolve, reject) => {
    Images.forge({id: image.id})
      .save(
        {
          data: image.data,
          updated_at: new Date()
        }
      )
      .then(savedImage => {
        resolve(savedImage.id);
      })
      .catch(error => {
        reject(error)
      });    
  })
}

exports.removeImage = (imageId) => {
  return new Promise( (resolve, reject) => {
    Images.forge({id: imageId})
      .destroy()
      .then(result => {
        resolve(imageId);
      })
      .catch(error => {
        reject(error)
      });   
  })
}

exports.getImage = (imageId) => {
  return new Promise( (resolve, reject) => {
    Images.forge({id: imageId})
    .fetch()
    .then(image => {
      resolve(
        { 
          ...image.attributes
        }
      );
    })
    .catch(error => {
      reject(error)
    });   
  })  
}