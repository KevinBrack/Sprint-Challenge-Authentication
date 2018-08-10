const axios = require("axios");
const bcrypt = require("bcryptjs");
const db = require("../database/dbConfig");
const jwt = require("jsonwebtoken");
const secret = require("../_secrets/keys");

const { authenticate } = require("./middlewares");

module.exports = server => {
  server.post("/api/register", register);
  server.post("/api/login", login);
  server.get("/api/jokes", authenticate, getJokes);
};

function generateToken(user) {
  const payload = {
    username: user.username
  };
  const options = {
    expiresIn: "4h"
  };
  const jwtKey = secret.jwtKey;
  return jwt.sign(payload, jwtKey, options);
}

function register(req, res) {
  const new_user = req.body;
  const hash = bcrypt.hashSync(new_user.password, 10);
  new_user.password = hash;
  db("users")
    .insert(new_user)
    .into("users")
    .then(user_id => {
      const token = generateToken(new_user);
      res.status(200).json({ token, user_id });
    })
    .catch(error => res.status(500).json(error.message));
}

function login(req, res) {
  const credentials = req.body;
  db("users")
    .where({ username: credentials.username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(credentials.password, user.password)) {
        const token = generateToken(user);
        res.status(200).json(token);
      } else {
        return res.status(401).json({ error: "You shall not pass!" });
      }
    })
    .catch(error => res.status(500).json(error.message));
}

function getJokes(req, res) {
  axios
    .get(
      "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten"
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: "Error Fetching Jokes", error: err });
    });
}
