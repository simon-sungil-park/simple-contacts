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

  models.addContact(contact)
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

module.exports = router;