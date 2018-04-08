const express = require('express'),
      bodyParser = require('body-parser');

const models = require('../models');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
  models.getContacts()
    .then(contacts => {
      res.json(
        {
          isOk: true,
          contacts: contacts
        }
      );
    })
    .catch(error => {
      res.status(500).json(
        {
          isOk: false,
          msg: 'Internal Error'
        }
      )
    });
})

router.post('/', (req, res) => {
  const contact = req.body;
  let imagedata = undefined;
  
  if (contact.imagedata) {
    imagedata = contact.imagedata;
    delete contact.imagedata;
  }
  
  new Promise((resolve, reject) => {
    if (imagedata) {
      models.addImage(imagedata)
        .then(image_id => resolve(image_id))
    }
    else {
      resolve(null);
    }
  })
    .then(image_id => {
      if (image_id) {
        contact.image_id = image_id;
      }
      return models.addContact(contact)
    })
    .then(savedContact => {
      res.json(
        {
          isOk: true,
          contact: savedContact
        }
      );
    })
    .catch(error => {
      res.status(500).json(
        {
          isOk: false,
          msg: 'Internal Error'
        }
      )
    });
})

router.put('/:contactId', (req, res) => {
  const contact = req.body;
  contact.id = req.params.contactId;

  let imagedata = undefined;
  
  if (contact.imagedata) {
    imagedata = contact.imagedata;
    delete contact.imagedata;
  }
  
  new Promise((resolve, reject) => {
    if (contact.image_id && imagedata) {
      models.removeImage(contact.image_id)
        .then(deletedImage_id => {
          resolve(deletedImage_id)
        })
    }
    else {
      resolve(null);
    }
  })
    .then(deletedImage_id => {
      return new Promise((resolve, reject) => {
        if (imagedata) {
          models.addImage(imagedata)
            .then(image_id => {
              resolve(image_id)
            })
        }
        else {
          resolve(null);
        }
      })
    })
    .then(image_id => {
      if (image_id) {
        contact.image_id = image_id;
      }
      return models.updateContact(contact)
    })
    .then(savedContact => {
      res.json(
        {
          isOk: true,
          contact: savedContact
        }
      );
    })
    .catch(error => {
      res.status(500).json(
        {
          isOk: false,
          msg: 'Internal Error'
        }
      )
    });
})

router.delete('/:contactId', (req, res) => {

  const { contactId } = req.params;

  models.removeContact(contactId)
    .then(result => {
      res.json(
        {
          isOk: true,
          deletedId: Number(result)
        }
      );
    })
    .catch(error => {
      res.status(500).json(
        {
          isOk: false,
          msg: 'Internal Error'
        }
      )
    });
})


module.exports = router;