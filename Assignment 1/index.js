// $( document ).ready(function() {
//      $("select").change(function () {

//     if ($('#blank').is(':selected')){
//     	$('#text').html("");
//     }

// 	if ($('#dog').is(':selected')){
//     	$('#text').html(dog.description);
//     }

//     if ($('#cat').is(':selected')){
//     	$('#text').html(cat.description);
//     }

//     if ($('#rabbit').is(':selected')){
//     	$('#text').html(rabbit.description);
//     }

//     if ($('#caterpillar').is(':selected')){
//     	$('#text').html(caterpillar.description);
//     }

//     if ($('#peacock').is(':selected')){
//     	$('#text').html(peacock.description);
//     }

//     if ($('#mouse').is(':selected')){
//     	$('#text').html(mouse.description);
//     }

//     if ($('#python').is(':selected')){
//     	$('#text').html(python.description);
//     }

//     if ($('#hamster').is(':selected')){
//     	$('#text').html(hamster.description);
//     }

//     if ($('#frog').is(':selected')){
//     	$('#text').html(frog.description);
//     }

//     if ($('#bee').is(':selected')){
//     	$('#text').html(bee.description);
//     }
// 	})
// });

// var dog = {
//     name: "dog",
//     description: "An adorable animal loved by many. Kept as pets."
// };

// var cat = {
//     name: "cat",
//     description: "An incredibly lazy animal, but kept as pets for some reason."
// };

// var caterpillar = {
//     name: "caterpillar",
//     description: "A worm-like animal, transforms into a butterfly as it ages."
// };

// var rabbit = {
//     name: "rabbit",
//     description: "A small animal that loves to run around. Loves eating carrots."
// };

// var peacock = {
//     name: "peacock",
//     description: "Lucky bird, not only do people enjoy its beauty, it also doesn't seem to have a predator"
// };

// var mouse  ={
//     name: "mouse",
//     description: "Small, squeaky animal. Contrary to Tom and Jerry, it's often falls victim to the cat as prey"
// };

// var python = {
//     name: "python",
//     description: "Slithery animal, very dangerous. If you're a programmer, then it might be worth looking into."
// };

// var hamster = {
//     name: "hamster",
//     description: "Small, adorable pet. Unfortunately it dies rather quickly."
// };

// var frog = {
//     name: "frog",
//     description: "Small amphibian animal, has unique jump and very long tongue"
// };

// var bee = {
//     name: "bee",
//     description: "Most likely to not be(e) your best friend. But the fate of the earth does depend on it."
// };

class Animal {
    constructor(name, description){
        this.name = name;
        this.description = description;
    }
}

var dog = new Animal("Dog", "An adorable animal loved by many. Kept as pets." )
var cat = new Animal("Cat", "An incredibly lazy animal, but kept as pets for some reason.")
var caterpillar = new Animal("Caterpillar", "A worm-like animal, transforms into a butterfly as it ages.")
var rabbit = new Animal("Rabbit",  "A small animal that loves to run around. Loves eating carrots.")
var peacock = new Animal("Peacock", "Lucky bird, not only do people enjoy its beauty, it also doesn't seem to have a predator")
var mouse = new Animal("Mouse", "Small, squeaky animal. Contrary to Tom and Jerry, it's often falls victim to the cat as prey")
var python = new Animal("Python", "Slithery animal, very dangerous. If you're a programmer, then it might be worth looking into.")
var hamster = new Animal("Hamster", "Small, adorable pet. Unfortunately it dies rather quickly.")
var frog = new Animal("Frog", "Small amphibian animal, has unique jump and very long tongue")
var bee = new Animal("Bee", "Most likely to not be(e) your best friend. But the fate of the earth does depend on it.")

var div = document.createElement('div');
div.id = "master"
document.getElementsByTagName('body')[0].appendChild(div);

var text = document.createElement('div');
text.id = "text"
document.getElementsByTagName('div')[0].appendChild(text);

var list = document.getElementById("animalList");
div.appendChild(list);

var blank = document.createElement('option');
blank.appendChild( document.createTextNode('') );
blank.id = 'blank';
list.appendChild(blank);

var animal = document.createElement('option');
animal.appendChild( document.createTextNode(dog.name) );
animal.id = 'dog';
list.appendChild(animal);

var animal = document.createElement('option');
animal.appendChild( document.createTextNode(cat.name) );
animal.id = 'cat';
list.appendChild(animal);

var animal = document.createElement('option');
animal.appendChild( document.createTextNode(caterpillar.name) );
animal.id = 'caterpillar';
list.appendChild(animal);

var animal = document.createElement('option');
animal.appendChild( document.createTextNode(rabbit.name) );
animal.id = 'rabbit';
list.appendChild(animal);

var animal = document.createElement('option');
animal.appendChild( document.createTextNode(peacock.name) );
animal.id = 'peacock';
list.appendChild(animal);

var animal = document.createElement('option');
animal.appendChild( document.createTextNode(mouse.name) );
animal.id = 'mouse';
list.appendChild(animal);

var animal = document.createElement('option');
animal.appendChild( document.createTextNode(python.name) );
animal.id = 'python';
list.appendChild(animal);

var animal = document.createElement('option');
animal.appendChild( document.createTextNode(hamster.name) );
animal.id = 'hamster';
list.appendChild(animal);

var animal = document.createElement('option');
animal.appendChild( document.createTextNode(frog.name) );
animal.id = 'frog';
list.appendChild(animal);

var animal = document.createElement('option');
animal.appendChild( document.createTextNode(bee.name) );
animal.id = 'bee';
list.appendChild(animal);

var list = document.getElementById("animalList")
list.addEventListener("change", function(){

})
