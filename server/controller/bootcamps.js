const Comment = require('../models').comments;

module.exports = {
  //Create a new comment
  create(req, res) {
    return Comment
      .create({
        name: req.body.name,
        website: req.body.website,
        levels: req.body.levels,
        format: req.body.format,
        format_description: req.body.format_description,
        languages: req.body.languages,
        money_needed: req.body.money_needed,
        online_only: req.body.online_only,
        number_of_students: req.body.number_of_students,
        contact_name: req.body.contact_name,
        contact_number: req.body.contact_number,
        contact_email: req.body.contact_email,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        published: req.body.published,
        updated_at: req.body.updated_at,
        country: req.body.country,
        source: req.body.source
      })
      .then(comment => res.status(201).send(comment))
      .catch(error => res.status(400).send(error));
  },
  //Return all comments
  allComments(req, res){
    return Comment
    .findAll({})
    .then(comment => res.status(201).send(comment))
    .catch(error => res.status(400).send(error));
  },
  //Return bootcamp specific comments
  bootcampComment(req, res){
    console.log(req.params.id);
    return Comment
    .findAll({
      where: {
        bootcamp_id: req.params.id
      }
    })
    .then(comment => res.status(201).send(comment))
    .catch(error => res.status(400).send(error));
  }
};