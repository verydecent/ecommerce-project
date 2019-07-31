const router = require('express').Router();
const Database = require('../models/itemsModel');

router.get('/itemfeed', (req, res) => {
  Database.getItems()
    .then(items => {
      res.status(200).json({ items });
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal server error' });
    });
});

module.exports = router;