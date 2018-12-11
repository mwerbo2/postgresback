


module.exports = (app) => {
    
    app.get('/user', (req, res) => res.status(201).send({ "message": "Users route"}));

}