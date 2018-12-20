const externalAPIcontroller = require('../controller/externalAPIcontroller');


module.exports = (app) => {
    app.get('/all', externalAPIcontroller.allBootcamps)
}