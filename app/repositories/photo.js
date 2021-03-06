var mongoose = require('mongoose');
var Photo    = require('../models/photo');

var PhotoRepository = {
    findOrCreatePhoto: function (query, params, cb) {
	Photo.findOneAndUpdate(
	    query,
	    params,
	    {new: true, upsert: true},
	    function (err, photo) {
		cb(err, photo);
	    }
	);
    },
    remove: function(query, cb) {
	Photo.remove(query, function (err, photo) {
	    cb(err, photo);
	});
    },
    findOne: function(query, cb) {
	Photo.findOne(query, function (err, photo) {
	    cb(err, photo);
	});
    }
};

module.exports = PhotoRepository;