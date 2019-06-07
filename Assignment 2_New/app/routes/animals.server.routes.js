var animals = require('../../app/controllers/animals.server.controller');
module.exports = function(app) {
app.route('/animals')
	.post(animals.create)
	.get(animals.list)

app.route('/animals/:animalId')
	.get(animals.read);

app.param('animalId', animals.animalByID);
};