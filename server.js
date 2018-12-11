const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express()
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes/index')(app)
require('./server/routes/userRoutes')(app)

app.listen(port, () => console.log(`Listening on ${port}`))

module.exports = app;
