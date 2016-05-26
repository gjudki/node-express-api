var _ = require('lodash');
var Cat = require('../models/cat.js');

module.exports = function(app) {

	/* Create */
	app.post('/cat', function (req, res) {
		console.log('REQUEST BODY::::::', req.body);
		var newCat = new Cat(req.body);
		newCat.save(function(err){
			if (err) {
				res.json({info: 'error durring cat create', error: err});
			} else {
				res.json({info: 'cat made!'});
			}
		});
	});

	/* READ */
	app.get('/cat', function(req, res) {
		Cat.find(function(err, cats){
			if (err) {
				res.json({info: 'error durring cat get', error: err});
			} else {
				res.json({info: 'cats found!', data: cats});
			}
		})
	});


	app.get('/cat/:id', function(req, res) {
		Cat.findById(req.params.id, function(err, cat){
			if(err){
				res.json({info: 'error durring cat get by id', error: err});
			};
			if (cat) {
				res.json({info: 'cat found by ID!', data: cat});
			} else {
				res.json({info: 'no kitty'});
			}
		})
	});

	/* Update */
	app.put('/cat/:id', function(req, res) {
		Cat.findById(req.params.id, function(err, cat){
			if(err){
				res.json({info: 'error durring cat get by id', error: err});
			}
			if (cat) {
				_.merge(cat, req.body);
				cat.save(function(err) {
					if (err){
						res.json({info: 'whoooops', error: err});
					};
					res.json({info: 'updated dat cool cat'})
				});
			} else {
				res.json({info: 'cat not found on updizzle'});
			}
		})
	});

	/* Delete */
	app.delete('/cat/:id', function (req, res){
		Cat.findByIdAndRemove(req.params.id, function(err) {
			if (err) {
				res.json({info: 'error trying to kill the cat... sicko', error: err});
			};
			res.json({info: 'you did. Your mom must be proud.'});
		})
		var audio = new Audio('./bye_bye.mp3');
		audio.play();
		res.json({info: 'cat removed!!!'});
	});
};
