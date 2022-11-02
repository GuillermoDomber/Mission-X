const express = require("express");
const bcrypt = require("bcrypt");
const { pool } = require("../db/dbconfig");
const router = express.Router();

router.post("/api/authentication/login", (req, res) => {
  console.log("/api/authentication/login ENDPOINT was hit! 🔓");
  const { type, username, password } = req.body;
  pool.execute(
    `SELECT name, password FROM missio20_team7.${type} WHERE name = ?;`,
    [username],

    (err, result) => {
      if (err) return console.log(err);
      if (result.length === 0) {
        console.log("No such user");
        return res.sendStatus(404);
      }
      bcrypt.compare(password, result[0].password, function (err, validPass) {
        if (validPass) {
          return res.status(200).send([{ name: result[0].name }]);
        }
        if (!validPass) {
          return res.sendStatus(401);
        }
      });
    }
  );
});

router.post("/api/authentication/signup", (req, res) => {
  console.log("/api/authentication/signup ENDPOINT was hit! 🔓");

  const { type, username, email, password } = req.body;
  const query = `INSERT INTO missio20_team7.${type} (name, email, password) VALUES (?, ?, ?);`;
  bcrypt.hash(password, 10, function (err, hashedPass) {
    pool.query(query, [username, email, hashedPass], (err, result) => {
      if (err) {
        console.log(err);
        returnres.status(400).send(err);
      }
      res.sendStatus(200);
    });
  });
});

module.exports = router;
