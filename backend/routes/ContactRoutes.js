const express = require('express');
const models = require('../models');

const router = express.Router();

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

module.exports = router;