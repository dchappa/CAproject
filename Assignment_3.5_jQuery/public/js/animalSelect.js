var div = $('<div>');
div.attr('id', 'master');
var body = $('body').append(div)

var text = $('<div>');
text.attr('id', 'text');
div.append(text);

var list = $('#animalList');
div.append(list);

var blank = $('<option>');
blank
    .text('');
  .attr('id', 'blank');
list.append(blank);

for(var i in animals){
    let new_animal = $('<option>');
    new_animal
        .text(animals[i].name);
        .attr('id', animals[i]._id);
        .val(animals[i].description);
    list.append(new_animal);
}

var list = $("#animalList")
list.change(function(){
            $("#text").html($("#animalList").val())
        })
