var _ = require('lodash');
var Dog = require('../models/dog.js');

module.exports = function(app) {

	/* Create */
	app.post('/dog', function (req, res) {
		console.log('REQUEST BODY::::::', req.body);
		var newDog = new Dog(req.body);
		newDog.save(function(err){
			if (err) {
				res.json({info: 'error durring dog create', error: err});
			} else {
				res.json({info: 'dog made!'});
			}
		});
	});

	/* READ */
	app.get('/dog', function(req, res) {
		Dog.find(function(err, dogs){
			if (err) {
				res.json({info: 'error durring dog get', error: err});
			} else {
				res.json({info: 'dogs found!', data: dogs});
			}
		})
	});

	app.get('/dog/:id', function(req, res) {
		Dog.findById(req.params.id, function(err, dog){
			if(err){
				res.json({info: 'error durring dog get by id', error: err});
			};
			if (dog) {
				res.json({info: 'dog found by ID!', data: dog});
			} else {
				res.json({info: 'no kitty'});
			}
		})
	});

	/* Update */
	app.put('/dog/:id', function(req, res) {
		Dog.findById(req.params.id, function(err, dog){
			if(err){
				res.json({info: 'error durring dog get by id', error: err});
			}
			if (dog) {
				_.merge(dog, req.body);
				dog.save(function(err) {
					if (err){
						res.json({info: 'whoooops', error: err});
					};
					res.json({info: 'updated dat cool dog'})
				});
			} else {
				res.json({info: 'dog not found on updizzle'});
			}
		})
	});

	/* Delete */
	app.delete('/dog/:id', function (req, res){
		Dog.findByIdAndRemove(req.params.id, function(err) {
			if (err) {
				res.json({info: 'error trying to kill the dog... sicko', error: err});
			};
			res.json({info: 'you did. Your mom must be proud.'});
		})
		var audio = new Audio('./bye_bye.mp3');
		audio.play();
		res.json({info: 'dog removed!!!'});
	});
};
