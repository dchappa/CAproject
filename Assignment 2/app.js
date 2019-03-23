const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dchappa:p27kNYEsHeesc79@constantadvancementproject-hv8ph.mongodb.net/test?retryWrites=true", {
	useNewUrlParser: true
}, function(error){
	if(error){
		console.log(error);
	}else{
		console.log("Connected to the database!")
	}
});

var animalSchema = new mongoose.Schema({
	name: String,
	id: Number,
	description: String
});

var Animal = mongoose.model("Animal", animalSchema);


// Animal.insertMany([
// 	{name: "dog", id: 1,
// 	description: "An adorable animal loved by many. Kept as pets."},
// 	{name: "cat", id: 2,
// 	description: "An incredibly lazy animal, but kept as pets for some reason."},
// 	{name: "caterpillar", id: 3,
// 	description: "A worm-like animal, transforms into a butterfly as it ages."},
// 	{name: "rabbit", id: 4,
// 	description: "A small animal that loves to run around. Loves eating carrots."},
// 	{name: "peacock", id: 5,
// 	description: "Lucky bird, not only do people enjoy its beauty, it also doesn't seem to have a predator"},
// 	{name: "mouse", id: 6,
// 	description: "Small, squeaky animal. Contrary to Tom and Jerry, it's often falls victim to the cat as prey"},
// 	{name: "python", id: 7,
// 	description: "Slithery animal, very dangerous. If you're a programmer, then it might be worth looking into."},
// 	{name: "hamster", id: 8,
// 	description: "Small, adorable pet. Unfortunately it dies rather quickly."},
// 	{name: "frog", id: 9,
// 	description: "Small amphibian animal, has unique jump and very long tongue"},
// 	{name: "bee", id: 10,
// 	description: "Most likely to not be(e) your best friend. But the fate of the earth does depend on it."},
// 	])

app.get("/", function (req,res){
	res.send("<h1>Welcome to the animal database! Add a number to the url see the following animals:<h1>"
		+ "<h2>\n1 - Dog <h2>"
		+ "<h2>\n2 - Cat <h2>");
});

app.get("/1", function(req, res){
	Animal.findOne(Animal.findOne({name: "dog"}), function(error,data){
		if(error){
			console.log("Problem finding the dog");
			console.log(error);
		}else{
			console.log("Here's the dog!");
			console.log(data);
			res.send(JSON.stringify(data));
		}
	})
});

app.get("/2", function(req, res){
	Animal.findOne(Animal.findOne({name: "cat"}), function(error,data){
		if(error){
			console.log("Problem finding the cat");
			console.log(error);
		}else{
			console.log("Here's the cat!");
			console.log(data);
			res.send(JSON.stringify(data));
		}
	})
});

app.get("/3", function(req, res){
	Animal.findOne(Animal.findOne({name: "caterpillar"}), function(error,data){
		if(error){
			console.log("Problem finding the caterpillar");
			console.log(error);
		}else{
			console.log("Here's the caterpillar!");
			console.log(data);
			res.send(JSON.stringify(data));
		}
	})
});

app.get("/4", function(req, res){
	Animal.findOne(Animal.findOne({name: "rabbit"}), function(error,data){
		if(error){
			console.log("Problem finding the rabbit");
			console.log(error);
		}else{
			console.log("Here's the rabbit!");
			console.log(data);
			res.send(JSON.stringify(data));
		}
	})
});

app.get("/5", function(req, res){
	Animal.findOne(Animal.findOne({name: "peacock"}), function(error,data){
		if(error){
			console.log("Problem finding the peacock");
			console.log(error);
		}else{
			console.log("Here's the peacock!");
			console.log(data);
			res.send(JSON.stringify(data));
		}
	})
});

app.get("/6", function(req, res){
	Animal.findOne(Animal.findOne({name: "mouse"}), function(error,data){
		if(error){
			console.log("Problem finding the mouse");
			console.log(error);
		}else{
			console.log("Here's the mouse!");
			console.log(data);
			res.send(JSON.stringify(data));
		}
	})
});

app.get("/7", function(req, res){
	Animal.findOne(Animal.findOne({name: "python"}), function(error,data){
		if(error){
			console.log("Problem finding the python");
			console.log(error);
		}else{
			console.log("Here's the python!");
			console.log(data);
			res.send(JSON.stringify(data));
		}
	})
});

app.get("/8", function(req, res){
	Animal.findOne(Animal.findOne({name: "hamster"}), function(error,data){
		if(error){
			console.log("Problem finding the hamster");
			console.log(error);
		}else{
			console.log("Here's the hamster!");
			console.log(data);
			res.send(JSON.stringify(data));
		}
	})
});

app.get("/9", function(req, res){
	Animal.findOne(Animal.findOne({name: "peacock"}), function(error,data){
		if(error){
			console.log("Problem finding the peacock");
			console.log(error);
		}else{
			console.log("Here's the peacock!");
			console.log(data);
			res.send(JSON.stringify(data));
		}
	})
});

app.get("/animals", function(req,res){
	const animalList = [
	{name: "dog",
	description: "An adorable animal loved by many. Kept as pets."},
	{name: "cat",
	description: "An incredibly lazy animal, but kept as pets for some reason."},
	{name: "caterpillar",
	description: "A worm-like animal, transforms into a butterfly as it ages."},
	{name: "rabbit",
	description: "A small animal that loves to run around. Loves eating carrots."},
	{name: "peacock",
	description: "Lucky bird, not only do people enjoy its beauty, it also doesn't seem to have a predator"},
	{name: "mouse",
	description: "Small, squeaky animal. Contrary to Tom and Jerry, it's often falls victim to the cat as prey"},
	{name: "python",
	description: "Slithery animal, very dangerous. If you're a programmer, then it might be worth looking into."},
	{name: "hamster",
	description: "Small, adorable pet. Unfortunately it dies rather quickly."},
	{name: "frog",
	description: "Small amphibian animal, has unique jump and very long tongue"},
	{name: "bee",
	description: "Most likely to not be(e) your best friend. But the fate of the earth does depend on it."},
	]

	res.render("animalList.ejs", {
		animalList: animalList
	})
});

app.get("*", function(req,res){
	res.send("Error! Make sure you only enter /1-10 to the url!")
});

app.listen(3000, function(){
	console.log("The Animal Server has started up.")
}); 