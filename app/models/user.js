// Define user

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: String,
    gcmToken: [{type: String, required: true}],
    myPhotoUrls: [
	{ 
	    photo: {type: mongoose.Schema.ObjectId, ref: 'Photo'}
	}
    ],
    votedPhotoUrls: [
	{
	    photo: {type: mongoose.Schema.ObjectId, ref: 'Photo'}
	}
    ]
});

module.exports = mongoose.model('User', userSchema);