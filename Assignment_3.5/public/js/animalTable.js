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
  aniRow.appendChild(tdName);
  let tdDescription = document.createElement('td');
  tdDescription.innerHTML = animals[i].description;
  animalDescription.appendChild(tdDescription);
  aniRow.appendChild(tdDescription);
  var deleteBtn = document.createElement("button");
	deleteBtn.id = "delete" + animals[i].name;
	deleteBtn.style.height = "25px";
	deleteBtn.style.width = "50px";
	deleteBtn.innerHTML = "Delete"; 
	deleteBtn.addEventListener("click", function(){
			xhttp.open("DELETE", "http://localhost:3000/animals" + animals[i].id, true);
				xhttp.onload = function () {
				var animalList = JSON.parse(xhttp.responseText);
				if (xhttp.readyState == 4 && xhttp.status == "200") {
					// console.table(animalList);
				} else {
					// console.error(animalList);
				}
			}
			xhttp.send(null);
		})
	var editBtn = document.createElement("button");
	editBtn.id = "edit" + animals[i].name;
	editBtn.style.height = "25px";
	editBtn.style.width = "50px";
	editBtn.innerHTML = "Edit";  
  	tdDescription.appendChild(deleteBtn);
  	tdDescription.appendChild(editBtn);
  table.appendChild(aniRow);
}

// deleteBtn.onclick = function(){
// 	xhttp.open("DELETE", "http://localhost:3000/animals", true);
// 	xhttp.setRequestHeader('Content-Type', 'application/json');
// 	let data = '{"name":"' + animalEntry.value + '", "description":"' + descriptionEntry.value + '"}'
// 	xhttp.send(data);

// }




document.body.appendChild(table);