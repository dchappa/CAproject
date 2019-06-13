var xhttp = new XMLHttpRequest();

var addBtn = document.createElement("button");
addBtn.style.height = "25px";
addBtn.style.width = "50px";
addBtn.innerHTML = "Add";

var animalEntry = document.createElement("INPUT");
animalEntry.setAttribute("type", "text");
animalEntry.value = "Animal Name";

var descriptionEntry = document.createElement("INPUT");
descriptionEntry.setAttribute("type", "text");
descriptionEntry.value = "Description";

addBtn.onclick = function(){
	xhttp.open("POST", "http://localhost:3000/animals", true);
	xhttp.send("name=" + animalEntry.value + "&lname=" + descriptionEntry.value);
}

var body = document.getElementsByTagName("body")[0];
body.appendChild(addBtn);
body.appendChild(animalEntry);
body.appendChild(descriptionEntry);