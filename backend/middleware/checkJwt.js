const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'Monkey inside of a cage but cant see the key';

function checkJwt(req, res, next) {
  const token = req.headers['authorization'];

  if (typeof header !== 'undefined ') {
    const bearer = header.splot(' ');
    const token = bearer[1];

    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Unauthorized token" });
      }
      else {
        req.decodedToken = decodedToken;
      }
    })
    req.token = token;
    next();
  }
  else {
    res.status(403).json({ message: 'No token provided '});
  }
}

module.exports = checkJwt;