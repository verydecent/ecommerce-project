const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Database = require('../models/userModel');
const generateToken = require('../helpers/generateToken');

router.post('/register', (req, res) => {
  let body = req.body;
  let { username, password, email, location } = body;
  const saltRounds = 14;

  if (!username || !password || !email || !location) {
    res.status(422).json({ message: "You are missing one or more required fields" });
  }
  else {
    body.password = bcrypt.hashSync(body.password, saltRounds);
    Database.addUser(body)
      .then(id => {
        res.status(200).json({ message: `User ${id} was successfully added` });
      })
      .catch(err => {
        res.status(500).json({ err });
      });
  }
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(422).json({ message: "You are missing one or more required fields" });
  }
  else {
    Database.getUserByEmail(email)
      .then(user => {
        const bodyPassword = user.password;

        if (bcrypt.compareSync(password, bodyPassword)) {

          console.log(generateToken);
          const token = generateToken(user);

          console.log("token log", token);
          res.status(200).json({ message: `Welcome ${user.email}`, token });
        }
        else {
          res.status(401).json({ message: "The credentials you've entered aren't valid" });
        }
      })
      .catch(err => {
        res.status(404).json({ message: 'Non-existant email' });
      });
  }
});

module.exports = router;