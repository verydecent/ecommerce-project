const router = require('express').Router();
const Data = require('../database/dbConfig');

console.log(Data);

router.get('/itemfeed', (req, res) => {
  Data('items')
    .then(items => {
      console.log(items);
      res.status(200).json({ items });
      // res.status(200).json(items);
    })
    .catch(err => {
      res.status(500).json({ error: 'Internal Server Error '});
    });
});

module.exports = router;