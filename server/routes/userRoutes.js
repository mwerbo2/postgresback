const userController = require('../controller/user');


module.exports = (app) => {
    
    app.get('/user/:email', userController.findUser);

    app.post('/user/new', userController.create);

    //Set up authentication routes for post, update, and delete
}