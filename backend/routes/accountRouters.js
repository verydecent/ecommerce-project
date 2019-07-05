const router = require('express').Router();
const Database = require('../models/itemsModel');

router.post('/sell', (req, res) => {
  const body = req.body;
  const { title, description, color, category, size, price } = body;

  if (!title || !description || !color || !category || !size || !price) {
    res.status(422).json({ error: { 'code': 422, 'message': 'Missing necessary body fields' } });
  }
  else {
    Database.postItem(body)
      .then(id => {
        console.log(id);
        res.status(200).json({ message: 'Item successfully listed' });
      })
      .catch(err => {
        res.status(500).json({ error: {'code': 500, 'message': 'Internal server error' } });
      });
  }
});

// router.get('/listings', (req, res) => {

// });

// router.get('/favorites', (req, res) => {
  
// });

// router.get('/messages', (req, res) => {
  
// });

// router.get('/transactions', (req, res) => {
  
// });

// router.get('/feedback', (req, res) => {
  
// });

// router.get('/settings', (req, res) => {
  
// });

module.exports = router;