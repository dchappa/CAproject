var Animal = require('mongoose').model('Animal');
exports.render = function(req, res) {
 if (req.session.lastVisit) {
 console.log(req.session.lastVisit);
 }

 req.session.lastVisit = new Date();
Animal.find({}, function(err, animalData) {
		if (err) {
			return next(err);
		} 
	});
}
