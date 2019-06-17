var xhttp = new XMLHttpRequest();

var addBtn = document.createElement("button");
addBtn.id = "addBtn";
addBtn.style.height = "25px";
addBtn.style.width = "50px";
addBtn.innerHTML = "Add";

var animalEntry = document.createElement("INPUT");
animalEntry.id = "animalEntry"
animalEntry.setAttribute("type", "text");
animalEntry.value = "Animal Name";

var descriptionEntry = document.createElement("INPUT");
descriptionEntry.id = "descriptionEntry"
descriptionEntry.setAttribute("type", "text");
descriptionEntry.value = "Description";

addBtn.onclick = function(){
	xhttp.open("POST", "http://localhost:3000/animals", true);
	xhttp.setRequestHeader('Content-Type', 'application/json')
	let data = '{"name":"' + animalEntry.value + '", "description":"' + descriptionEntry.value + '"}'
	xhttp.send(data);
	// This appends it to the table
	table = document.getElementById("aniTable");
	let aniRow = document.createElement('tr');
  	let tdName = document.createElement('td');
  	tdName.innerHTML = animalEntry.value;
  	aniRow.appendChild(tdName);
  	let tdDescription = document.createElement('td');
  	tdDescription.innerHTML = descriptionEntry.value;
  	aniRow.appendChild(tdDescription);
  	table.appendChild(aniRow);

  	// This will append it to the dropdown list
  	list = document.getElementById("animalList");
  	let new_animal = document.createElement('option');
    new_animal.appendChild( document.createTextNode(animalEntry.value));
    new_animal.id = animalEntry.value;
    new_animal.value = descriptionEntry.value;
    list.appendChild(new_animal);
}

var body = document.getElementsByTagName("body")[0];
body.appendChild(addBtn);
body.appendChild(animalEntry);
body.appendChild(descriptionEntry);