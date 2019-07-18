const router = require('express').Router();
const bcrypt = require('bcryptjs');

const usersDB = require('../models/userModel');
const ItemDatabase = require('../models/itemsModel');
const generateToken = require('../helpers/generateToken');

router.post('/register', (req, res) => {
  let body = req.body;
  let { email, username, password, passwordConfirm, location } = body;
  const saltRounds = 14;

  if (!username || !password || !email || !location) {
    res.status(422).json({ message: "You are missing one or more required field(s)" });
  }
  else if (password !== passwordConfirm) {
    res.status(422).json({ message: "You are missing one or more required field(s)" });
  }
  else {
    // The order in which the body is being posted matters, it must align with the columns order in the DB
    // const newBody = { email, password, username, location };
    const hashedPassword = bcrypt.hashSync(body.password, saltRounds);
    body.password = hashedPassword;
    delete body.passwordConfirm;
    usersDB.addUser(body)
      .then(user => {
        const payload = { user };
        console.log('payload', payload);
        const token = generateToken(payload);
        console.log('token', token);

        res.status(200).json({ 
          message: `Welcome ${user}`, token });
      })
      .catch(error => {
        res.status(500).json({ error });
      });
  }
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(422).json({ message: "You are missing one or more required fields" });
  }
  else {
    usersDB.getUserByEmail(email)
      .then(user => {
        // Inner join would take place here? 
        const passwordOnRecord = user.password;
        if (bcrypt.compareSync(password, passwordOnRecord)) {
          const payload = { user };
          const token = generateToken(payload);

          res.status(200).json({ message: `Welcome ${user.email}`, token });
        }
        else {
          res.status(401).json({ message: "The credentials you've entered aren't valid" });
        }
      })
      .catch(erroror => {
        res.status(404).json({ message: 'Non-existant email' });
      });
  }
});

module.exports = router;