const express = require('express'),
      bodyParser = require('body-parser');

const models = require('../models');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/:imageId.jpg', (req, res) => {
  models.getImage(req.params.imageId)
    .then(image => {
      const base64 = image.data.split('base64,')[1];
      const img = new Buffer(base64, 'base64');
      res.writeHead(200, {
        'Content-Type': 'image/jpeg',
        'Content-Length': img.length
      });
      res.end(img); 
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