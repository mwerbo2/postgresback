module.exports = (app) => {
    //Return all comments
    app.get('/comment', bootcampController.allComments);

    //Return comments for a specific bootcamp
    app.get('/comment/:id', bootcampController.bootcampComment);

    //Create a new comment for a bootcamp
    app.post('/comment/new', bootcampController.create);
}