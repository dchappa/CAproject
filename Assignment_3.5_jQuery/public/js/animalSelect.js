var div = $('<div>');
div.attr('id', 'master');
var body = $('body').append(div)

var text = $('<div>');
text.attr('id', 'text');
div.append(text);

var list = $('#animalList');
div.append(list);

var blank = $('<option>');
blank.text('');
blank.attr('id', 'blank');
list.append(blank);

for(var i in animals){
    let new_animal = $('<option>');
    new_animal.text(animals[i].name);
    new_animal.attr('id', animals[i]._id);
    new_animal.val(animals[i].description);
    list.append(new_animal);
}

var list = $("#animalList")
list.change(function(){
            $("#text").html($("#animalList").val())
        })
