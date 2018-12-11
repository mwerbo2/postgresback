const userController = require('../controller/user');


module.exports = (app) => {
    
    app.get('/user/:email', userController.findUser);

    app.post('/user/new', userController.create);
}