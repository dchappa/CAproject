'use strict'
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;

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
module.exports = Animal;

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))


app.get('/index', (req,res) => {
  res.sendFile(path.join(__dirname,'..', '/public/index.html'), function(err) {
    if(err) {
      return res.status(404).send("Could not find \/index")
    }
    console.log("Sent index.html")
  })
})

app.get('/', (req,res) => {
  Animal.find(function(err,a) {
    if(err) {
      return res.status(404).send("Could not find value \/animals")
    }
    return res.send(a)
  })
})

app.get("/1", function(req, res){
	Animal.findOne(Animal.findOne({name: "dog"}), function(error,data){
		if(error){
			console.log("Problem finding the dog");
			console.log(error);
			res.status(404).send("Could not find value: "+req.params.value);
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
			res.status(404).send("Could not find value: "+req.params.value)
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
			res.status(404).send("Could not find value: "+req.params.value)
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
			res.status(404).send("Could not find value: "+req.params.value)
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
			res.status(404).send("Could not find value: "+req.params.value)
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
			res.status(404).send("Could not find value: "+req.params.value)
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
			res.status(404).send("Could not find value: "+req.params.value);
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
			res.status(404).send("Could not find value: "+req.params.value)
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
			res.status(404).send("Could not find value: "+req.params.value)
		}else{
			console.log("Here's the peacock!");
			console.log(data);
			res.send(JSON.stringify(data));
		}
	})
});

app.listen(port, () => console.log("Listening on port 3000."))