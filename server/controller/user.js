const User = require('../models').user;

module.exports = {
  //Create a new comment
  create(req, res) {
    return User
      .create({
        name: req.body.name,
        email: req.body.email,
        summary: req.body.summary,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  //Return specific user
  findUser(req, res){
    return User
    .findAll({
      where: {
        email: req.params.email
      }
    })
    .then(user => res.status(201).send(user))
    .catch(error => res.status(400).send(error));
  }
};