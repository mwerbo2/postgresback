const axios = require('axios');

module.exports = {
allBootcamps: function(req, res){
    axios.get('https://code.org/schools.json')
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
};

