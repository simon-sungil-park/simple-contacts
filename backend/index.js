const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

const models = require('./models');

app.get('/api/contact', (req, res) => {
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
})

