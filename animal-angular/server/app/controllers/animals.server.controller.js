var Animal = require('mongoose').model('Animal');

exports.create = function(req, res, next) {
	console.log("At the creation!");
var animal = new Animal(req.body);

	animal.save(function(err) {
		if (err) {
			return next(err);
		} else {
			res.json(animal);
		}
	});
};

exports.delete = function(req, res, next) {
	req.animal.remove(function(err) {
		if (err) {
			return next(err);
		} else {
			res.json(req.animal);
		}
	})
};

exports.update = function(req,res,next) {
	Animal.findByIdAndUpdate(req.animal.id, req.body, function(err, user){
		if (err) {
			return next(err);
		} else {
			res.json(user);
		}
	});
};

exports.list = function(req, res, next) {
	console.log("At the list!");
	Animal.find({}, function(err, animals) {
		if (err) {
			return next(err);
		} else {
			console.log(animals);
			res.json(animals);
		}
	});
};

exports.read = function(req, res) {
	res.json(req.animal);
};
exports.animalByID = function(req, res, next, id) {
	Animal.findOne({
		_id: id
	}, function(err, animal) {
		if (err) {
		return next(err);
		} else {
		req.animal = animal;
		next();
		}
		});
};
