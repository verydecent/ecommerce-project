const router = require('express').Router();
const Data = require('../database/dbConfig');

const checkJwt = require('../middleware/checkJwt');

// This is the pool routes, we will modularize all routes into proper router files when we stabalize a bit more

router.get('/itemfeed', (req, res) => {
  Data('items')
    .then(items => {
      console.log(items);
      // res.status(200).json({ items });
      res.status(200).json(items);
    })
    .catch(err => {
      res.status(500).json({ error: 'Internal Server Error '});
    });
});

// Post to item to Items table
// Authenticate to check if a user is logged in
// Can only use this API route if the user recieves clearance through a middleware checking the JWT

router.post('/account/sell', (req, res) => {
  const itemData = req.body;

  const { posted_by_user_id, price, shipping_price, title, description, category, size, color } = itemData;

  if ( !posted_by_user_id || !price || !shipping_price || !title || !description || !category || !size || !color) {
    res.status(422).json({ message: "You are missing one or more required field(s)" });
  }
  else {
    Data('items').returning('posted_by_user_id').insert(itemData)
      .then(ids => {
        res.status(201).json({ message: `Item ${ids[0]} successfully posted` });
      })
      .catch(err => {
        res.status(500).json({ error: "Internal Server Error" });
      })
  }
});

router.get('/account/items', checkJwt, (req, res) => {
  console.log('req.decodedToken', req.decoded);
  
  const items = req.decoded;

  console.log('items', items);
  res.status(200).json({ items });
});

router.get('/account/settings', checkJwt, (req, res) => {
  const token = req.decoded;
  console.log(token);

  res.status(200).json(token);
})

// put request to update users item
// Authentication: User needs to be verified as the owner of the item
// Matching user ID to the item ID? Not enough... too simple and easy people can guess users ID

module.exports = router;