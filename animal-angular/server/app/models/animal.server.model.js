var mongoose = require('mongoose'),
Schema = mongoose.Schema;
var AnimalSchema = new Schema({
name: String,
dob: String,
color: String,
size: String
});
mongoose.model('Animal', AnimalSchema);
