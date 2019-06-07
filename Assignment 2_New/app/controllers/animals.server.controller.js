var Animal = require('mongoose').model('Animal');
exports.create = function(req, res, next) {
var animal = new Animal(req.body);

animal.save(function(err) {
if (err) {
return next(err);
} else {
res.json(animal);
}
});
};

exports.list = function(req, res, next) {
Animal.find({}, function(err, animals) {
if (err) {
return next(err);
} else {
res.json(animals);
}
});
};