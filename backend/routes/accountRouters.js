const router = require('express').Router();
const Database = require('../models/itemsModel');
const checkJwt = require('../middleware/checkJwt');

// This whole Router file needs to be protected, it can only load if a JWT token is present that matches the login credentials of the requesting user

// These routes are all specialized routes that will be available for the logged in user only

router.post('/sell', (req, res) => {
  const body = req.body;
  const { title, description, color, category, size, price } = body;

  if (!title || !description || !color || !category || !size || !price) {
    res.status(422).json({ error: { 'code': 422, 'message': 'Missing necessary body fields' } });
  }
  else {
    Database.postItem(body)
      .then(id => {
        res.status(200).json({ message: 'Item successfully listed' });
      })
      .catch(err => {
        res.status(500).json({ error: {'code': 500, 'message': 'Internal server error' } });
      });
  }
});

router.get('/listings', checkJwt, (req, res) => {
  const { id } = req.decodedJwt;

  // Use the username to find users items for sale
  Database.getItemsById(id)
    .then(records => {
      // return all records where id=user_id in favoritedItems table
      // get all records from items table where item.id=items_id
      res.status(200).json({ message: records })
    })
    .catch(err => {
      res.status(500).json({ error: {'code': 500, 'message': 'Internal server error' } });
    });
});

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