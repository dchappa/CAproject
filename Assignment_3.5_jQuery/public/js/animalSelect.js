// var div = document.createElement('div');
// div.id = "master"
// document.getElementsByTagName('body')[0].appendChild(div);

var div = $('<div>');
div.attr('id', 'master');
var body = $('body').append(div)

// var text = document.createElement('div');
// text.id = "text"
// document.getElementsByTagName('div')[0].appendChild(text);

var text = $('<div>');
text.attr('id', 'text');
div.append(text);

var list = $('#animalList');
div.append(list);

var blank = $('<option>');
blank.append( document.createTextNode(''));
blank.attr('id', 'blank');
list.append(blank);

for(var i in animals){
    // let new_animal = document.createElement('option');
    // new_animal.appendChild( document.createTextNode(animals[i].name) );
    // new_animal.id = animals[i]._id;
    // new_animal.value = animals[i].description
    // list.appendChild(new_animal);

    let new_animal = $('<option>');
    new_animal.append(document.createTextNode(animals[i].name));
    new_animal.attr('id', animals[i]._id);
    new_animal.val(animals[i].description);
    list.append(new_animal);
}

var list = $("#animalList")
list.change(function(){
            $("#text").html($("#animalList").val())
        })
