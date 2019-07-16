const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Database = require('../models/userModel');
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
        console.log('User record', user);
        // Inner join would take place here? 

        ItemDatabase.getItemsByUserId(user.id)
          .then(items => {
            console.log(`items with user id ${user.id}`, items);

            const passwordOnRecord = user.password;
            if (bcrypt.compareSync(password, passwordOnRecord)) {
              // if (password === passwordOnRecord) {
              console.log('bcrypt success password matches');

              const futurePayload = {
                user: user,
                userItems: items,
              };
              
              const token = generateToken(futurePayload);
    
              console.log("token log", token);
              res.status(200).json({ message: `Welcome ${user.email}`, token });
            }
            else {
              res.status(401).json({ message: "The credentials you've entered aren't valid" });
            }
          })
          .catch(err => {
            res.status(400).json({ error: err });
          });
      })
      .catch(err => {
        res.status(404).json({ message: 'Non-existant email' });
      });
  }
});

module.exports = router;