/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../config/secrets");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        // the token is not valid
        res.status(401).json({ message: "cant touch this!" });
      } else {
        next();
      }
    },);
  } else {
  res.status(401).json({ you: 'shall not pass!' });
  }
};
