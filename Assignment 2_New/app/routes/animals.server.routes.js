var users = require('../../app/controllers/animals.server.controller');
module.exports = function(app) {
app.route('/users').post(users.create);
};