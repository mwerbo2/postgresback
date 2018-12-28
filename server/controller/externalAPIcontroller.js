const axios = require('axios');
const BootcampSchool = require('../models').Bootcamp_School;

module.exports = {
addBootcamp(req,res){
    return BootcampSchool
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
        .then(function(schools){
            console.log("School inserted: ", schools);
            res.status(200).send(schools);
        })
        .catch(function(error){
            console.log("Error creating: ", error);
        });
},

allBootcamps(req, res){
    axios.get('https://code.org/schools.json')
    .then(function (response) {
        var dat = response.data.schools;
        console.log(dat[0])
    return BootcampSchool
        .bulkCreate(dat)
            .then(function(newBootcamps) {
                res.status(200).json(newBootcamps);
            });
   
    })
    .catch(function (error) {
        console.log(error);
    });
    
    
},
getAllBootcamps(req, res){
    return BootcampSchool
        .findAll({})
        .then(bootcamps => res.status(201).send(bootcamps))
        .catch(error => res.status(400).send(error))
    }
};

