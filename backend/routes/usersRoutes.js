const router = require('express').Router();

const Database = require('../models/userModel');

router.get('/users', (req,res) => {
  Database.getUsers()
  .then(users => {
    res.json({ users });
  })
  .catch(err => {
    res.status(500).json({ error : err });
  });
});

module.exports = router;