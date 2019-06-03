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

var animals = [dog, cat, caterpillar, rabbit, peacock, mouse, python, hamster, frog, bee];



var div = document.createElement('div');
div.id = "master"
document.getElementsByTagName('body')[0].appendChild(div);

var text = document.createElement('div');
text.id = "text"
document.getElementsByTagName('div')[0].appendChild(text);

var list = document.getElementById("animalList");
div.appendChild(list);


for(i=0; i < animals.length; i++){
    var new_animal = document.createElement('option');
    new_animal.appendChild( document.createTextNode(animals[i].name) );
    new_animal.id = animals[i].name;
    list.appendChild(new_animal);
}


var list = document.getElementById("animalList")
list.addEventListener("change", function(){
    for(i=0; i < animals.length; i++){
        if(list.value == animals[i].name){
            document.getElementById("text").innerHTML = animals[i].description
        }
    }
})