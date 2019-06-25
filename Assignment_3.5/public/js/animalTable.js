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
		delXHTTP = new XMLHttpRequest();
		let currButton = document.getElementById("delete" + i);
		currButton.addEventListener("click", function(){
				delXHTTP.open("DELETE", "http://localhost:3000/animals/" + animals[i]._id, true);
					delXHTTP.onload = function () {
					var animalList = JSON.parse(delXHTTP.responseText);
					if (delXHTTP.readyState == 4 && delXHTTP.status == "200") {
						//deletes from the dropdown
						  	list = document.getElementById("animalList");
						  	list.remove((parseInt(i)+1));
						//deletes from the table
							document.getElementById(animals[i]._id + "name").style.display = "none";
							document.getElementById(animals[i]._id + "description").style.display = "none";
					} else {
						console.error(animalList);
					}
				}
				delXHTTP.send();
			});

		let editButton = document.getElementById("edit" + i);
		let clicked = false;
		editButton.addEventListener("click", function(){
			if(!clicked){
				xhttpEdit = new XMLHttpRequest();
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

				let confirmBtn = document.createElement("button");
				confirmBtn.id = "confirm" + i;
				confirmBtn.style.height = "25px";
				confirmBtn.style.width = "60px";
				confirmBtn.innerHTML = "Confirm"; 

				confirmBtn.addEventListener("click", function(){
						xhttpEdit.open("PUT", "http://localhost:3000/animals/" + animals[i]._id, true);
						xhttpEdit.setRequestHeader('Content-type','application/json; charset=utf-8');
							xhttpEdit.onload = function () {
								var animalList = JSON.parse(xhttpEdit.responseText);
								if (xhttpEdit.readyState == 4 && xhttpEdit.status == "200") {
									let new_name = document.getElementById(animals[i]._id + "name");
									new_name.innerHTML = editName.value;
									let new_description = document.getElementById(animals[i]._id + "description");
									new_description.childNodes[0].textContent = editDescription.value;
									list = document.getElementById("animalList");
									list.remove(i+1); // + 1 because there's a blank option
									list.options[i].innerHTML = editName.value;
							  		list.options[i].value = editDescription.value;
							  		editName.style.display = "none";
							  		editDescription.style.display = "none";
							  		confirmBtn.style.display = "none";
							  		clicked = false;
								} else {
									console.error(animalList);
								}
							}
							let data = '{"name":"' + editName.value + '", "description":"' + editDescription.value + '"}';
							xhttpEdit.send(data);
						});
					row.appendChild(confirmBtn);
			}
		});
}






