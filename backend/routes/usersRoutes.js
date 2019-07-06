const router = require('express').Router();

const checkJwt = require('../middleware/checkJwt');
const Database = require('../models/userModel');

const db = require('../database/dbConfig');

router.get('/', checkJwt, (req,res) => {
  Database.getUsers()
  .then(users => {
    res.json({ users });
  })
  .catch(err => {
    res.status(500).json({ error : err });
  });
});

router.get('/:username', (req, res) => {
  const { username } = req.params;

  db('users')
    .where({ username }).first()
      .then(user => {
        console.log('user promise', user);
        
        const { id } = user;
        
        db('users_items')
          .where({ users_id: id })
          .then(records => {
            console.log('All records from specifc user_id', records);

            // let arr = [items.ids, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

            // Select all records in items table that have these id's
            db('items').select().whereIn('id', [records])
              .then(res => {
                res.json(res);
              })
              .catch(err => {
                res.json(err);
              });
          });
      })
      .catch(err => {
        res.json(err);
      })
});

module.exports = router;