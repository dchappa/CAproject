var xhttp = new XMLHttpRequest();

var addBtn = document.createElement("button");
	addBtn.id = "addBtn";
	addBtn.style.height = "25px";
	addBtn.style.width = "50px";
	addBtn.innerHTML = "Add";

var deleteBtn = document.createElement("button");
	deleteBtn.id = "delete" + (parseInt(i)+1);
	deleteBtn.style.height = "25px";
	deleteBtn.style.width = "50px";
	deleteBtn.innerHTML = "Delete"; 

var editBtn = document.createElement("button");
	editBtn.id = "edit" + (i + 1);
	editBtn.style.height = "25px";
	editBtn.style.width = "50px";
	editBtn.innerHTML = "Edit";  

var animalEntry = document.createElement("INPUT");
animalEntry.id = "animalEntry"
animalEntry.setAttribute("type", "text");
animalEntry.value = "Animal Name";

var descriptionEntry = document.createElement("INPUT");
descriptionEntry.id = "descriptionEntry"
descriptionEntry.setAttribute("type", "text");
descriptionEntry.value = "Description";

var recentAdds = [];
addBtn.onclick = function(){
	xhttp.open("POST", "http://localhost:3000/animals", true);
	xhttp.setRequestHeader('Content-Type', 'application/json')
	let data = '{"name":"' + animalEntry.value + '", "description":"' + descriptionEntry.value + '"}'
	xhttp.send(data);

	// This appends it to the table
	table = document.getElementById("aniTable");
	let aniRow = document.createElement('tr');
  	var tdName = document.createElement('td');
  	tdName.innerHTML = animalEntry.value;
  	tdName.id = animals[animals.length-1]._id + "name";
  	aniRow.appendChild(tdName);
  	var tdDescription = document.createElement('td');
  	tdDescription.innerHTML = descriptionEntry.value;
  	tdDescription.id = animals[animals.length-1]._id + "description";
  	tdDescription.appendChild(deleteBtn);
  	tdDescription.appendChild(editBtn);
  	aniRow.appendChild(tdDescription);
  	table.appendChild(aniRow);

  	// This will append it to the dropdown list
  	list = document.getElementById("animalList");
  	let new_animal = document.createElement('option');
    new_animal.appendChild( document.createTextNode(animalEntry.value));
    new_animal.id = animalEntry.value;
    new_animal.value = descriptionEntry.value;
    list.appendChild(new_animal);
    recentAdds.push(animals[animals.length-1]._id);
}

deleteBtn.onclick = function (){
		let table = document.getElementById("aniTable");
			var parent = deleteBtn.parentElement;
			ani_id = parent.id.substring(0, parent.id.length-11); //original id
			xhttp.open("DELETE", "http://localhost:3000/animals/" + ani_id);
					xhttp.onload = function () {
					var animalList = JSON.parse(xhttp.responseText);
					if (xhttp.readyState == 4 && xhttp.status == "200") {
						console.table(animalList);
					} else {
						console.error(animalList);
					}
				}
				xhttp.send();
			document.getElementById(ani_id + "name").style.display = "none"; 
			document.getElementById(ani_id + "name").style.display = "none";
		}
	

var body = document.getElementsByTagName("body")[0];
body.appendChild(addBtn);
body.appendChild(animalEntry);
body.appendChild(descriptionEntry);