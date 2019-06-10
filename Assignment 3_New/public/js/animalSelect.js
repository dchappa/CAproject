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

var list = document.getElementById("animalList")
list.addEventListener("change", function(){
            document.getElementById("text").innerHTML = document.getElementById("animalList").value
        })
   