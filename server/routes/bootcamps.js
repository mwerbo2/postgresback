const bootcampController = require('../controller/bootcamps');

module.exports = (app) => {
    app.get('/allBootcamps', bootcampController.allBootcamps);
	app.post('/bootcamp/new', bootcampController.createBootcamp);
}
