const axios = require('axios');
const Bootcamp = require('../models').bootcamp;

module.exports = {

allBootcamps(req, res){
    axios.get('https://code.org/schools.json')
    .then(function (response) {

    return Bootcamp
        .bulkCreate(response.data.schools)
            .then(function(newBootcamps) {
                // res.json(newBootcamps);
                // console.log("Inserted all records");
                res.send({'message': "all gone"})
            });
   
    })
    .catch(function (error) {
        console.log(error);
    });
    
    
},
getAllBootcamps(req, res){
    return Bootcamp
        .findAll({})
        .then(bootcamps => res.status(201).send(bootcamps))
        .catch(error => res.status(400).send(error))
    }
};