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
}

// hideAnimal = function(id){
// 	for(let i in animals){
// 		if(id == animals[i]._id){
// 			document.getElementById()
// 		}
// 	}
// }





