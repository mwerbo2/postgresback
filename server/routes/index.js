const bootcampController = require('../controller/bootcamps');


module.exports = (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to Bootcamp Connect API',
  }));
};
