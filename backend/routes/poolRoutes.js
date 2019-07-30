const router = require('express').Router();
const Data = require('../database/dbConfig');
const multer = require('multer');
const bcrypt = require('bcryptjs');
const cloudinary = require('cloudinary');
const checkJwt = require('../middleware/checkJwt');
const env = require('dotenv');

// This is the pool routes, we will modularize all routes into proper router files when we stabalize a bit more
// auth route the root of it all

const upload = multer({ dest: __dirname + '/uploads/images' });

// CLOUDINARY CONFIG 
cloudinary.config({
  cloud_name: process.env.CLOUD_API_SECRET,
  api_key: process.env.CLOUD_API_SECRET,
  api_secret: process.env.CLOUD_API_SECRET,
});

router.get('/authorize-user', checkJwt, (req, res) => {
  const authUser = req.decoded;
  console.log(authUser)
  res.status(200).json(authUser);
});


router.get('/items', (req, res) => {
  Data('items as i').select('i.id', 'i.brand', 'i.price', 'i.title', 'i.size', 'i.created_at', 'images.url')
    .join('items_images', 'i.id', 'items_images.item_id')
    .join('images', 'items_images.image_id', 'images.id')
    .then(items => {
      console.log('items after join', items);
      res.status(200).json(items);
    })
    .catch(err => {
      res.status(500).json({ error: 'Internal server error '});
    });
});

router.get('/items/:id', (req, res) => {
  const { id } = req.params;
  Data('items as i')
  .join('items_images', 'i.id', 'items_images.item_id')
  .join('images', 'items_images.image_id', 'images.id')
  .where('items_images.item_id', id ).first()
    .then(item => {
      res.status(200).json(item)
    })
    .catch(error => {
      res.status(500).json({ error: "Internal server error" });
    });
})

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

// PICTURE UPLOADING ROUTES

  router.put('/account/upload-user-picture/:user_id', upload.single('user-image'), (req, res) => {
    const { user_id } = req.params;
    const path = req.file.path;

    console.log(req.file)

    cloudinary.uploader.upload(path, (result) => {
      const imgUrl = result.secure_url;
      console.log('imgUrl', imgUrl)
      Data('images').insert({ url: imgUrl }, ['id', 'url'])
        .then(ids => ids[0])
        .then(obj => {
          Data('users').where({ id: user_id }).update({ image_id: obj.id })
            .then(res.status(200).json(obj.url))
            .catch(error => res.status(500).json({ error: "Internal server error" }))
        });
    });
  });

  // GET USER PROFILE PIC

  router.get('/account/get-user-picture/:user_id', (req, res) => {
    const { user_id } = req.params;

    console.log('Get user profile success');
    Data('users').where({ id: user_id }).first()
      .then(user => {
        Data('images').where({ id: user.image_id }).first()
          .then(image => {
            res.status(200).json(image);
          })
          .catch(error => res.status(500).json({ error: "Internal server error" }));
      })
      .catch(error => res.status(500).json({ error: "Internal server error" }));
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


router.post('/account/post-item/image/', upload.single('item-images'), (req, res) => {
  console.log('req.file', req.file);
  const path = req.file.path;

  cloudinary.uploader.upload(path, (result) => {
    const imgUrl = result.secure_url;

    Data('images').insert({ url: imgUrl }, 'id')
      .then(ids => ids[0])
      .then(id => res.status(200).json(id))
      .catch(error => res.status(500).json({ error: "Internal server error" }));
  });
});


// Post item by user
router.post('/account/post-item/:id', (req, res) => {
  const { posted_by_user_id, price, shipping_price, brand, title, description, category, size, color, image_id } = req.body;
  
  if ( !posted_by_user_id || !price || !shipping_price || !brand || !title || !description || !category || !size || !color || !image_id ) {
    res.status(422).json({ message: "You are missing one or more required field(s)" });
  }
  else {
    const item = {
      posted_by_user_id,
      price,
      shipping_price,
      brand,
      title,
      description,
      category,
      size,
      color,
    };

    Data('items').insert(item, 'id')
      .then(ids => ids[0])
      .then(item_id => {
        Data('items_images').insert({ item_id, image_id })
          .then(res.status(200).json({ message: `Item ${item_id} successfully posted` }))
          .catch(error => res.status(500).json({ error: "Internal server error" }));
      })
      .catch(error => res.status(500).json({ error: "Internal server error" }));
  }
});

// Post into items-user table
router.post('/account/liked-items/', (req, res) => {
  const { item_id, id } = req.body;

  Data('items_users_liked').insert({ user_id: id, item_id: item_id }, ['user_id', 'item_id'])
    .then(ids => {
      res.status(200).json({ message: `${ids[0]} liked item ${ids[1]}` });
    })
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
      res.status(200).json(items);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// Delete liked item
router.delete('/account/liked-items/:id', (req, res) => {
  const { id } = req.params;
  const { user_id } = req.headers;
    
  Data('items_users_liked').where({ user_id: user_id, item_id: id }).del()
    .then(amount => {
      res.status(200).json({ message: `${amount} item deleted` });
    })
    .catch(error => {
      res.status(500).json({ error: "Internal server error" });
    });
});


// Items based on user and returns user as well
router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  Data('users as u').select('u.username', 'u.location', 'u.image_id').where({ id }).first()
    // .then(arr => arr[0])
    .then(user => {
      console.log(user)
      Data('images as i').select('i.url').where({ id: user.image_id }).first()
        // .then(arr => arr[0])
        .then(image => {
          user.image = image.url;
          res.status(200).json(user);
        })
        .catch(error => res.status(500).json({ error: "Could not find user Image" }));
    })
    .catch(error => res.status(500).json({ error: "Internal server error" }));
});

// Purchase item
router.put('/purchase-item/:id', (req, res) => {
  const { id } = req.params;
  const { user_id } = req.body;
  Data('items').where({ id }).update({ purchased_by_user_id: user_id, is_available: 0 })
    .then(numberOfItemsUpdated => {
      res.status(200).json({ message: "Item purchased!" });
    })
    .catch(error => {
      res.status(500).json({ error: "Internal server error" });
    });
});

// Bought transactions
router.get('/user/:id/bought-items/', (req, res) => {
  const { id } = req.params;
  Data('items').where({ purchased_by_user_id: id })
    .then(items => {
      res.status(200).json(items)
    })
    .catch(error => res.status(500).json({ error: "Internal server error" }));
});

// Sold transactions
router.get('/user/:id/sold-items/', (req, res) => {
  const { id } = req.params;

  Data('items').where({ posted_by_user_id: id, is_available: 0 })
    .then(items => {
      res.status(200).json(items);
    })
    .catch(error => res.status(500).json({ error: "Internal server error" }));
});

router.post('/account/post-feedback', (req, res) => {

  const { item_id, feedback_author_id, feedback_recipient_id, rating, description } = req.body;

  Data('feedback').insert({ item_id, author_user_id: feedback_author_id, rating, description}, 'id')
    .then(idArr => {
      console.log(idArr)
      const id = idArr[0];
      Data('users_feedback').insert({ feedback_id: id, recipient_user_id: feedback_recipient_id })
        .then(res.status(200).json({ message: "Feedback Sent!" }))
        .catch(error => res.status(500).json({ error: "Internal server error" }));
    })
    .catch(error => res.status(500).json({ error: "Internal server error" }));
});

// Checks to see if feedback has already been left
router.post('/account/check-feedback', (req, res) => {
  const { id, feedback_author_id } = req.body;
  Data('feedback').where({ item_id: id, author_user_id: feedback_author_id }).first()
    .then(record => {
      console.log('record from checking', record);
      res.status(200).json(record)

    })
    .catch(error => res.status(500).json({ error: "Internal server error" }));
});

router.get('/account/get-feedback/:id', (req, res) => {
  const { id } = req.params;
  // Info we neede returned....
  // Item Title, Item Image, Item Updated date aka date transacted, Feedback description, 

  Data('users_feedback')
    .join('feedback', 'users_feedback.feedback_id', 'feedback.id')
    .where('users_feedback.recipient_user_id', id)
    .then(usersFeedback => {
      res.status(200).json(usersFeedback);
    })
    .catch(error => res.status(500).json({ error: "Internal server error" }))
});

// get store information by username
// Return user info + items owned by user
router.get('/store/:username', (req, res) => {
  const { username } = req.params;

  Data('users').where({ username }).first()
    .then(user => {
      Data('items').where({ posted_by_user_id: user.id })
        .then(items => {
          res.status(200).json({ user_info: user, user_items: items });
        })
        .catch(error => res.status(500).json({ error: "Internal server error" }));
    })
    .catch(error => res.status(500).json({ error: "Internal server error" }));
});

// user store feedback
router.get('/store/feedback/:username', (req, res) => {
  const { username } = req.params;
  Data('users').where({ username }).first()
    .then(user => {
      Data('users_feedback')
        .join('feedback', 'users_feedback.feedback_id', 'feedback.id')
        .where('users_feedback.recipient_user_id', user.id)
          .then(feedback => {
            res.status(200).json({ user_info: user, user_feedback: feedback });
          })
          .catch(error => res.status(500).json({ error: "Internal server error" }))
    })
    .catch(error => res.status(500).json({ error: "Internal server error" }));
});

// Do Messages exist with this Chat id? If so then Not new message, else create new Chat

router.post('/messages', (req, res) => {
  const { author_id, item_id, inquiring_user_id, merchant_user_id, message } = req.body;

  Data('chat').where({ item_id, merchant_user_id, inquiring_user_id }).first()
    .then(existing_chat => {
      if (existing_chat) {
        console.log('---exists true---', existing_chat);

        Data('messages').insert({ chat_id: existing_chat.id, author_id, message })
          .then(something => {
            res.status(200).json({ message: "Message Sent!" })
          })
          .catch(error => res.status(500).json({ error: "Internal server error" }));
      }
      else {
        console.log('---exists false---', existing_chat);
        Data('chat').insert({ item_id, merchant_user_id, inquiring_user_id }, 'id')
          .then(ids => ids[0])
          .then(chat_id => {
            Data('messages').insert({ chat_id, author_id, message })
              .then(res.status(200).json({ message: "Message Sent!" }))
              .catch(error => res.status(500).json({ error: "Internal server error" }));
          })
          .catch(error => res.status(500).json({ error: "Internal server error" }));
      }
    })
    .catch(error => res.status(500).json({ error: "Internal server error" }));
});

// get Chat room messages based on Chat ID
router.get('/messages/:chat_id', (req, res) => {
  const { chat_id } = req.params;

  Data('chat').where({ id: chat_id }).first()
    .then(chat => {
        Data('messages')
            // Select users images too in future
          .select('users.username', 'messages.message', 'messages.created_at', 'messages.author_id')
          .join('users', 'messages.author_id', 'users.id')
          .where('messages.chat_id', chat_id)
          .orderBy('created_at', 'desc')
            .then(messages => {
              res.status(200).json({ messages, chat });
              // res.status(200).json({ messages, chat, item_title });
            })
            .catch(error => res.status(500).json({ error: "Internal server error" }));
    })
    .catch(error => res.status(500).json({ error: "Internal server error" }));
});

// get users buying section Chats based on user id
router.get('/messages/buying/:id', (req, res) => {
  const { id } = req.params;

  Data('chat')
    // .select('items.picture')
    .select('items.title as item_title', 'users.username as merchant_username', 'chat.id as chat_id', 'chat.created_at as chat_created_at')
    .join('items', 'chat.item_id', 'items.id')
    .join('users', 'chat.merchant_user_id', 'users.id')
    .where('chat.inquiring_user_id', id)
    .orderBy('chat_created_at', 'desc')
      .then(chatArr => res.status(200).json(chatArr))
      .catch(error => res.status(500).json({ error: "Internal server error" }));
});

// get users selling section Chats based on user id
router.get('/messages/selling/:id', (req, res) => {
  const { id } = req.params;

  Data('chat')
    .select('items.title as item_title', 'users.username as inquiring_username', 'chat.id as chat_id', 'chat.created_at as chat_created_at')
    .join('items', 'chat.item_id', 'items.id')
    .join('users', 'chat.inquiring_user_id', 'users.id')
    .orderBy('chat_created_at', 'desc')
    .where('chat.merchant_user_id', id)
      .then(chatArr => res.status(200).json(chatArr))
      .catch(error => res.status(500).json({ error: "Internal server error" }));
});

module.exports = router;