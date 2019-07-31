const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'Monkey inside of a cage but cant see the key';

function checkJwt(req, res, next) {
  const header = req.headers['authorization'];

  if (header) {
    console.log('through?');
    const bearer = header.split(' ');
    const token = bearer[1];
    
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Unauthorized token" });
      }
      else {
        // req.decodedjwt gets updated and then sent to the authorized route, then in that handler we can respond with the decodedToken, but what is the decodedToken? 
        // In our case it would be either Two things
        //    1. User's ID
        //        - respond with the user's ID then make a axios request to database returning   all item records that match the users ID
        //    2. User information along with all of it's personal user information
        //        - repsond with the User's Item records from the decoded token and update the state with an array of items by the user or if its user info an array with the users info
        req.decoded = decodedToken;
        next();
      }
    });
  }
  else {
    res.status(403).json({ message: 'No token provided '});
  }
}

module.exports = checkJwt;