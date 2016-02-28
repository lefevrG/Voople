// Define models for event

var mongoose = require('mongoose');

var photoSchema = mongoose.Schema({
    name: {type: String, required: true},
    creationTime: {type: Number, default: Date.now, required: true},
    user: {type: mongoose.Schema.ObjectId, ref: 'User', required: true},
    photoUrl: {type: String, required: true},
    nbUpVote: Number,
    nbDownVote: Number
});

module.exports = mongoose.model('Photo', eventSchema);