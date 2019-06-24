var xhttp = new XMLHttpRequest();

var currID = parseInt(i) + 1;
var newID = 1;

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

addBtn.onclick = function(){}
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
		var table = document.getElementById("aniTable");
		let aniRow = document.createElement('tr');
	  	var tdName = document.createElement('td');
	  	tdName.innerHTML = animalEntry.value;
	  	tdName.id = animals[currID]._id + "name"
	  	aniRow.appendChild(tdName);
	  	var tdDescription = document.createElement('td');
	  	tdDescription.innerHTML = descriptionEntry.value;
	  	tdDescription.id = animals[currID]._id + "description"
	  	deleteBtn.id = "delete" + (currID);
	  	editBtn.id = "edit" + (currID);
	  	currID = currID + 1;
	  	newID = newID + 1;
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

			} 
		};
		var data = '{"name":"' + animalEntry.value + '", "description":"' + descriptionEntry.value + '"}';

		xhttp.send(data);

	

	  	// This will append it to the dropdown list
	  	// list = document.getElementById("animalList");
	  	// let new_animal = document.createElement('option');
	   //  new_animal.appendChild( document.createTextNode(animalEntry.value));
	   //  new_animal.id = animalEntry.value;
	   //  new_animal.value = descriptionEntry.value;
	   //  list.appendChild(new_animal);

		for(let i in animals){
			xhttpDel = new XMLHttpRequest();
			let currButton = document.getElementById("delete" + i);
			currButton.addEventListener("click", function(){
					xhttpDel.open("DELETE", "http://localhost:3000/animals/" + animals[i]._id, true);
						xhttpDel.onload = function () {
						var animalList = JSON.parse(xhttpDel.responseText);
						if (xhttpDel.readyState == 4 && xhttpDel.status == "200") {
							console.table(animalList);
						} else {
							console.error(animalList);
						}
					}
					xhttpDel.send();
					//deletes from the dropdown
					  	list = document.getElementById("animalList");
					  	list.remove((parseInt(i)+1));
					//deletes from the table
					document.getElementById(animals[i]._id + "name").style.display = "none";
					document.getElementById(animals[i]._id + "description").style.display = "none";
					
				});

			currButton = document.getElementById("edit" + i);
			let clicked = false;
			var confirmBtn = document.createElement("button");
			currButton.addEventListener("click", function(){
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
						xhttpEdit.send(data);
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




var body = document.getElementsByTagName("body")[0];
body.appendChild(addBtn);
body.appendChild(animalEntry);
body.appendChild(descriptionEntry);