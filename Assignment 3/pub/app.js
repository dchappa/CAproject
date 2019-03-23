function getAnimal(index,fun) {
  var request = new XMLHttpRequest()
  request.open('GET', '/'+index, true)

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var resp = request.responseText
      console.log(resp)
      return fun(JSON.parse(resp))
    } else {
      return fun({})
    }
  }

  request.onerror = function() {
    return fun({})
  }

  request.send()
}

function getAnimalList(fun) {
  var request = new XMLHttpRequest()
  request.open('GET', '/', true)

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var resp = request.responseText
      console.log(resp)
      return fun(JSON.parse(resp))
    } else {
      return fun([])
    }
  }

  request.onerror = function() {
    return fun([])
  }

  request.send()
}


function selectChanged() {
  var sel = document.getElementById("animalList")
  var selectedOption = sel.options.item(sel.selectedIndex)
  var val = selectedOption.value

  console.log(val)

  var animal = getAnimal(val, function(animal) {
    var p = document.getElementById("text")

    if(val == -1) {
      p.innerHTML = ""
    } else {
      p.innerHTML = animal.description
    }
  })
}

function load() {
  var animals = getAnimalList(function(animals) {
    console.log(animals)

    var div = document.createElement("div")
    div.id = "master"

    var selection = document.createElement("select")
    selection.onchange = selectChanged
    selection.id = "animalList"


    var option = document.createElement("option")
    option.value = -1
    option.innerHTML = ""
    selection.add(option)

    for (var i = 0; i < animals.length; i++) {
      option = document.createElement("option")
      option.value = i
      option.innerHTML = animals[i].name
      selection.add(option)
    }

    var text = document.createElement('div');
	text.id = "text";
	
    div.appendChild(selection)

    var b = document.getElementById("main")
    b.appendChild(div)
  })
}