var xhttp = new XMLHttpRequest();

var table = document.createElement('table')
table.id = "aniTable"
var row = document.createElement('tr')
var animalName = document.createElement('th');
animalName.innerHTML = "Name"
var animalDescription = document.createElement('th');
animalDescription.innerHTML = "Description"
row.appendChild(animalName)
row.appendChild(animalDescription)
table.appendChild(row)

for(var i in animals){
let aniRow = document.createElement('tr');
  let tdName = document.createElement('td');
  tdName.innerHTML = animals[i].name;
  tdName.id = animals[i]._id + "name";
  aniRow.appendChild(tdName);
  let tdDescription = document.createElement('td');
  tdDescription.innerHTML = animals[i].description;
  tdDescription.id = animals[i]._id + "description";
  animalDescription.appendChild(tdDescription);
  aniRow.appendChild(tdDescription);
  var deleteBtn = document.createElement("button");
	deleteBtn.id = "delete" + i;
	deleteBtn.style.height = "25px";
	deleteBtn.style.width = "50px";
	deleteBtn.innerHTML = "Delete"; 
	var editBtn = document.createElement("button");
	editBtn.id = "edit" + i;
	editBtn.style.height = "25px";
	editBtn.style.width = "50px";
	editBtn.innerHTML = "Edit";  
  	tdDescription.appendChild(deleteBtn);
  	tdDescription.appendChild(editBtn);
  table.appendChild(aniRow);
}

document.body.appendChild(table);

for(let i in animals){
	let currButton = document.getElementById("delete" + i);
	currButton.addEventListener("click", function(){
			xhttp.open("DELETE", "http://localhost:3000/animals/" + animals[i]._id, true);
				xhttp.onload = function () {
				var animalList = JSON.parse(xhttp.responseText);
				if (xhttp.readyState == 4 && xhttp.status == "200") {
					console.table(animalList);
				} else {
					console.error(animalList);
				}
			}
			xhttp.send();
			//deletes from the dropdown
			  	list = document.getElementById("animalList");
			  	list.remove((parseInt(i)+1));
			//deletes from the table
			document.getElementById(animals[i]._id + "name").style.display = "none";
			document.getElementById(animals[i]._id + "description").style.display = "none";
			
		});

	let editButton = document.getElementById("edit" + i);
	let clicked = false;
	var confirmBtn = document.createElement("button");
	editButton.addEventListener("click", function(){
		if(!clicked){
			clicked = true;
			let row = document.getElementById(animals[i]._id + "description");

			var editName = document.createElement("INPUT");
			editName.id = "editName"
			editName.setAttribute("type", "text");
			editName.value = animals[i].name;

			var editDescription = document.createElement("INPUT");
			editDescription.id = "editDescription"
			editDescription.setAttribute("type", "text");
			editDescription.value = animals[i].description;

			row.appendChild(editName);
			row.appendChild(editDescription);

			confirmBtn.id = "confirm" + i;
			confirmBtn.style.height = "25px";
			confirmBtn.style.width = "60px";
			confirmBtn.innerHTML = "Confirm"; 

			confirmBtn.addEventListener("click", function(){
				xhttp.open("PUT", "http://localhost:3000/animals/" + animals[i]._id, true);
				xhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
						xhttp.onload = function () {
						var animalList = JSON.parse(xhttp.responseText);
						if (xhttp.readyState == 4 && xhttp.status == "200") {
							console.table(animalList);
						} else {
							console.error(animalList);
						}
					}
					let data = '{"name":"' + editName.value + '", "description":"' + editDescription.value + '"}'
					let new_name = document.getElementById(animals[i]._id + "name");
					new_name.innerHTML = editName.value;
					let new_description = document.getElementById(animals[i]._id + "description");
					new_description.innerHTML = editDescription.value;
					xhttp.send(data);
					list = document.getElementById("animalList");
					list.remove((parseInt(i)+1));
					list.options[i].innerHTML = editName.value;
			  		list.options[i].value = editDescription.value;
			  		// deleteBtn.style.display = "block";
			  		// editBtn.style.display = "block";
			  		row.appendChild(deleteBtn);
			  		row.appendChild(editBtn);
				});
			row.appendChild(confirmBtn);
		}
	});

}






