var xhttp = new XMLHttpRequest();

var table = document.createElement('table')
table.align = "center";
table.id = "aniTable";
var row = document.createElement('tr')
var animalName = document.createElement('th');
animalName.innerHTML = "Name";
var animalDescription = document.createElement('th');
animalDescription.innerHTML = "Description";
row.appendChild(animalName);
row.appendChild(animalDescription);
table.appendChild(row);

for(var i in animals){
let aniRow = document.createElement('tr');
	aniRow.id = "aniRow" + animals[i].name + i;
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
					let animalList = JSON.parse(delXHTTP.responseText);
					if (delXHTTP.readyState == 4 && delXHTTP.status == "200") {
						//deletes from the table
							let aniTable = document.getElementById("aniTable");
							let row = document.getElementById("aniRow" + animals[i].name + i);
							aniTable.deleteRow(row.rowIndex);										
						//deletes from the dropdown
						  	let list = document.getElementById("animalList");
						  	document.getElementById(animals[i]._id).selected = true;
						  	 list.remove(list.selectedIndex);
							currDeleted++;
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
				let new_name = document.getElementById(animals[i]._id + "name");
				let new_description = document.getElementById(animals[i]._id + "description");

				var editName = document.createElement("INPUT");
				editName.id = "editName"
				editName.setAttribute("type", "text");
				editName.value = new_name.innerHTML;

				var editDescription = document.createElement("INPUT");
				editDescription.id = "editDescription"
				editDescription.setAttribute("type", "text");
				editDescription.value = new_description.childNodes[0].textContent;

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
									var drop_val = document.getElementById(animals[i]._id)
									new_name.innerHTML = editName.value;
									new_description.childNodes[0].textContent = editDescription.value;
									list = drop_val.innerHTML = editName.value;
						  			drop_val.value = editDescription.value;
							  		editName.style.display = "none";
							  		editDescription.style.display = "none";
							  		confirmBtn.style.display = "none";
							  		clicked = false;
							  		editName.value = new_name.innerHTML;
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






