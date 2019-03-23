$( document ).ready(function() {
     $("select").change(function () {

    if ($('#blank').is(':selected')){
    	$('#text').html("");
    }

	if ($('#dog').is(':selected')){
    	$('#text').html(dog.description);
    }

    if ($('#cat').is(':selected')){
    	$('#text').html(cat.description);
    }

    if ($('#rabbit').is(':selected')){
    	$('#text').html(rabbit.description);
    }

    if ($('#caterpillar').is(':selected')){
    	$('#text').html(caterpillar.description);
    }

    if ($('#peacock').is(':selected')){
    	$('#text').html(peacock.description);
    }

    if ($('#mouse').is(':selected')){
    	$('#text').html(mouse.description);
    }

    if ($('#python').is(':selected')){
    	$('#text').html(python.description);
    }

    if ($('#hamster').is(':selected')){
    	$('#text').html(hamster.description);
    }

    if ($('#frog').is(':selected')){
    	$('#text').html(frog.description);
    }

    if ($('#bee').is(':selected')){
    	$('#text').html(bee.description);
    }
	})
});

	

var div = document.createElement('div');
div.id = "master"
document.getElementsByTagName('body')[0].appendChild(div);


var list = document.getElementById("animalList");
div.appendChild(list);

var blank = document.createElement('option');
blank.appendChild( document.createTextNode('') );
blank.id = 'blank';
list.appendChild(blank);

var animal = document.createElement('option');
animal.appendChild( document.createTextNode('Dog') );
animal.id = 'dog';
list.appendChild(animal);

var animal = document.createElement('option');
animal.appendChild( document.createTextNode('Cat') );
animal.id = 'cat';
list.appendChild(animal);

var animal = document.createElement('option');
animal.appendChild( document.createTextNode('Caterpillar') );
animal.id = 'caterpillar';
list.appendChild(animal);

var animal = document.createElement('option');
animal.appendChild( document.createTextNode('Rabbit') );
animal.id = 'rabbit';
list.appendChild(animal);

var animal = document.createElement('option');
animal.appendChild( document.createTextNode('Peacock') );
animal.id = 'peacock';
list.appendChild(animal);

var animal = document.createElement('option');
animal.appendChild( document.createTextNode('Mouse') );
animal.id = 'mouse';
list.appendChild(animal);

var animal = document.createElement('option');
animal.appendChild( document.createTextNode('Python') );
animal.id = 'python';
list.appendChild(animal);

var animal = document.createElement('option');
animal.appendChild( document.createTextNode('Hamster') );
animal.id = 'hamster';
list.appendChild(animal);

var animal = document.createElement('option');
animal.appendChild( document.createTextNode('Frog') );
animal.id = 'frog';
list.appendChild(animal);

var animal = document.createElement('option');
animal.appendChild( document.createTextNode('Bee') );
animal.id = 'bee';
list.appendChild(animal);

var text = document.createElement('div');
text.id = "text"
document.getElementsByTagName('div')[0].appendChild(text);

var dog = {
	name: "dog",
	description: "An adorable animal loved by many. Kept as pets."
};

var cat = {
	name: "cat",
	description: "An incredibly lazy animal, but kept as pets for some reason."
};

var caterpillar = {
	name: "caterpillar",
	description: "A worm-like animal, transforms into a butterfly as it ages."
};

var rabbit = {
	name: "rabbit",
	description: "A small animal that loves to run around. Loves eating carrots."
};

var peacock = {
	name: "peacock",
	description: "Lucky bird, not only do people enjoy its beauty, it also doesn't seem to have a predator"
};

var mouse  ={
	name: "mouse",
	description: "Small, squeaky animal. Contrary to Tom and Jerry, it's often falls victim to the cat as prey"
};

var python = {
	name: "python",
	description: "Slithery animal, very dangerous. If you're a programmer, then it might be worth looking into."
};

var hamster = {
	name: "hamster",
	description: "Small, adorable pet. Unfortunately it dies rather quickly."
};

var frog = {
	name: "frog",
	description: "Small amphibian animal, has unique jump and very long tongue"
};

var bee = {
	name: "bee",
	description: "Most likely to not be(e) your best friend. But the fate of the earth does depend on it."
};