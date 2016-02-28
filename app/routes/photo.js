var photo = require('../controllers/photoCtrl');

module.exports = function (app) {
    app.get('/photos', photo.getPhotos);
    app.get('/user/:user_id/photos', photo.getUserPhotos);
    app.post('/photo', photo.createPhoto);
    app.delete('/photo/:photo_id', photo.deletePhoto);
    app.put('/photo/:photo_id/upVote', photo.upVote);
    app.put('/photo/:photo_id/downVote', photo.downVote);
    app.delete('/photo/:photo_id/user/:photo_id/unvote', event.removeVote);
};