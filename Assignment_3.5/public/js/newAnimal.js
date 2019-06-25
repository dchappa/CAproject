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
		xhttp.setRequestHeader('Content-Type', 'application/json');

		xhttp.onreadystatechange = function () {
			if (xhttp.readyState == 4 && xhttp.status == "200") {
				console.table(xhttp.responseText);
				const value = JSON.parse(this.responseText);
				animals.push(value);
				var deleteBtn = document.createElement("button");
				deleteBtn.style.height = "25px";
				deleteBtn.style.width = "50px";
				deleteBtn.innerHTML = "Delete"; 

				var editBtn = document.createElement("button");
				editBtn.style.height = "25px";
				editBtn.style.width = "50px";
				editBtn.innerHTML = "Edit";

	
			addAnimal(animalEntry.value, descriptionEntry.value, deleteBtn, editBtn);
			
			} 
		};
		var data = '{"name":"' + animalEntry.value + '", "description":"' + descriptionEntry.value + '"}';

		xhttp.send(data);

		
	}

function addAnimal(name, description, deleteBtn, editBtn){
	var table = document.getElementById("aniTable");
		let aniRow = document.createElement('tr');
	  	let tdName = document.createElement('td');
	  	tdName.innerHTML = name;
	  	tdName.id = animals[animals.length-1]._id + "name"
	  	aniRow.appendChild(tdName);
	  	var tdDescription = document.createElement('td');
	  	tdDescription.innerHTML = description;
	  	tdDescription.id = animals[animals.length-1]._id + "description"
	  	deleteBtn.id = "delete" + (animals.length-1);
	  	editBtn.id = "edit" + (animals.length-1);
	  	tdDescription.appendChild(deleteBtn);
	  	tdDescription.appendChild(editBtn);
	  	aniRow.appendChild(tdDescription);
	  	table.appendChild(aniRow);
	  	// This will append it to the dropdown list
	  	list = document.getElementById("animalList");
	  	let new_animal = document.createElement('option');
	    new_animal.appendChild(document.createTextNode(name));
	    new_animal.id = name;
	    new_animal.value = description;
	    list.appendChild(new_animal);
	    deleteButtonListener(animals.length-1);
		editButtonListener(animals.length-1);
}
function deleteButtonListener(aniIndex){
	xhttpDel = new XMLHttpRequest();
			let currButton = document.getElementById("delete" + aniIndex);
			currButton.addEventListener("click", function(){
					xhttpDel.open("DELETE", "http://localhost:3000/animals/" + animals[aniIndex]._id, true);
						xhttpDel.onload = function () {
						var animalList = JSON.parse(xhttpDel.responseText);
						if (xhttpDel.readyState == 4 && xhttpDel.status == "200") {
								//deletes from the dropdown
							 	list = document.getElementById("animalList");
							  	list.remove(aniIndex+1);
							//deletes from the table
							document.getElementById(animals[aniIndex]._id + "name").style.display = "none";
							document.getElementById(animals[aniIndex]._id + "description").style.display = "none";
						} else {
							console.error(animalList);
						}
					}
					xhttpDel.send();					 			
				})
		}
function editButtonListener(aniIndex){
		let currButton = document.getElementById("edit" + aniIndex);
			let clicked = false;
			currButton.addEventListener("click", function(){
			if(!clicked){
				xhttpEdit = new XMLHttpRequest();
				clicked = true;
				let row = document.getElementById(animals[aniIndex]._id + "description");
				let new_name = document.getElementById(animals[aniIndex]._id + "name");
				let new_description = document.getElementById(animals[aniIndex]._id + "description");


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
				confirmBtn.id = "confirm" + aniIndex;
				confirmBtn.style.height = "25px";
				confirmBtn.style.width = "60px";
				confirmBtn.innerHTML = "Confirm"; 

				confirmBtn.addEventListener("click", function(){
					xhttpEdit.open("PUT", "http://localhost:3000/animals/" + animals[aniIndex]._id, true);
					xhttpEdit.setRequestHeader('Content-type','application/json; charset=utf-8');
						xhttpEdit.onload = function () {
							var animalList = JSON.parse(xhttpEdit.responseText);
							if (xhttpEdit.readyState == 4 && xhttpEdit.status == "200") {
								new_name.innerHTML = editName.value;
								new_description.childNodes[0].textContent = editDescription.value;
								list = document.getElementById("animalList");
								list.remove(aniIndex+1); // + 1 because there's a blank option
								list.options[aniIndex].innerHTML = editName.value;
						  		list.options[aniIndex].value = editDescription.value;
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

var body = document.getElementsByTagName("body")[0];
body.appendChild(addBtn);
body.appendChild(animalEntry);
body.appendChild(descriptionEntry);