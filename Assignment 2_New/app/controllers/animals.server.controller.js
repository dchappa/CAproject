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