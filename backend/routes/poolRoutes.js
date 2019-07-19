const router = require('express').Router();
const Data = require('../database/dbConfig');

const bcrypt = require('bcryptjs');

const checkJwt = require('../middleware/checkJwt');

// This is the pool routes, we will modularize all routes into proper router files when we stabalize a bit more
// auth route the root of it all

router.get('/authorize-user', checkJwt, (req, res) => {
  const authUser = req.decoded;
  res.status(200).json({ authUser });
});

router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  Data('users').where({ id }).first()
    .then(user => {
      console.log(user);
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json({ error: "Internal server error" });
    });
});

router.get('/items', (req, res) => {
  Data('items')
    .then(items => {
      res.status(200).json(items);
    })
    .catch(err => {
      res.status(500).json({ error: 'Internal server error '});
    });
});

router.get('/items/:id', (req, res) => {
  const { id } = req.params;
  Data('items').where({ id }).first()
    .then(item => {
      res.status(200).json(item)
    })
    .catch(error => {
      res.status(500).json({ error: "Internal server error" });
    });
})

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
        res.status(500).json({ error: "Internal server error" });
      })
  }
});

router.get('/account/items', checkJwt, (req, res) => {
  const items = req.decoded;
  res.status(200).json({ items });
});

// Update user info
router.put('/account/settings/update/user-info', (req, res) => {
  const { id, email, username, location, } = req.body;

  if (!email && !username && !location) {
    res.status(400).json({ error: "You are missing one of the necessary fields to update" });
  }

  Data('users').where({ id }).update({ username, email, location })
    .then(id => {
      res.status(200).json({ message: `User ${id} successfully updated` });
    })
    .catch(error => {
      res.status(500).json({ error: "Internal server error" });
    })
});

// Update user password
router.put('/account/settings/update/user-password', (req, res) => {

  const { id, currentPassword, newPassword, confirmNewPassword } = req.body;

  // Although we are validating that the passwords match on the client, we will validate here just to be safe and for conceptual practice
  if (newPassword !== confirmNewPassword) {
    res.status(400).json({ error: "The new password and password confirmation do not match" });
  }

  Data('users').where({ id }).first()
    .then(user => {
      const passwordOnRecord = user.password;
      if (bcrypt.compareSync(currentPassword, passwordOnRecord)) {
        const saltRounds = 14;
        const password = bcrypt.hashSync(newPassword, saltRounds);

        Data('users').where({ id }).update({ password })
          .then(id => {
            res.status(200).json({ message: `User ${id}'s Passowrd updated` });
          })
          .catch(error => {
            res.status(400).json({ error: "Something went wrong updating the password" });
          });
      }
    })
    .catch(error => {
      res.status(400).json({ error: "Error comparing users password" });
    })
});

// Get items based on user ID
router.get('/account/store/:id', (req, res) => {
  const { id } = req.params;
  Data('items').where({ posted_by_user_id: id })
    .then(items => {
      res.status(200).json(items);
    })
    .catch(error => {
      res.status(500).json({ error: "Internal server error" });
    });
});

// Post item by user
router.post('/account/post-item', (req, res) => {
  let { posted_by_user_id, price, shipping_price, title, description, category, size, color } = req.body;

  // Request failing, maybe we need to change the string into integer

  // Second parameter is Radix, Radix being the Base system we are using, in this case we want all number combinations in cluding 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 so the returning number will be in the form of Base 10 Radix
  // Reassigning after chaning the string into integer
  // price = parseInt(price, 10);
  // shipping_price = parseInt(shipping_price, 10);
  const item = {
    posted_by_user_id,
    price,
    shipping_price,
    title,
    description,
    category,
    size,
    color
  };

  Data('items').returning('id').insert(item)
    .then(id => {
      res
      res.status(200).json({ message: `Item ${id} successfully posted! `});
    })
    .catch(error => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

// Post into items-user table
router.post('/account/liked-items/', (req, res) => {
  const { item_id, id } = req.body;

  Data('items_users_liked').insert({ user_id: id, item_id: item_id })
    .then(
      res.status(200).json({ message: "You liked an item!" })
    )
    .catch(error => {
      res.status(500).json({ error: "Internal server error" });
    });
});

// Get request for users items liked, so now are we creating an endpoint that works in conjunction to the like-item route? So that when it is posted it not only updates the DAtabase but it also update the API.... Or are we making a get request to this API and then itll already have that liked data without having to access the database....
// Data manipulation and simply having the data.... 
router.get('/account/liked-items/:id', (req, res) => {
  const { id } = req.params;

  Data('items_users_liked')
    .join('items', 'items_users_liked.item_id', 'items.id')
    .where('items_users_liked.user_id', id)
    .then(items =>{
      res.status(200).json({ items });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// Items based on user and returns user as well
router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  Data('users').where({ id }).first()
    .then(user => {
      user = {
        location: user.location,
        username: user.username,
        // profile-picture: user.profile,
      }
      res.status(200).json({ user });
    })
    .catch(error => {
      res.status(500).json({ error: "Internal server error" });
    });
  // res.status(200).json({ user: user, items: items });
});

// put request to update users item
// Authentication: User needs to be verified as the owner of the item
// Matching user ID to the item ID? Not enough... too simple and easy people can guess users ID

module.exports = router;