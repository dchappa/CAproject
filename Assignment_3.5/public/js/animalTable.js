var table = document.createElement('table')
var row = document.createElement('tr')
var animalName = document.createElement('th');
animalName.innerHTML = "Name"
var animalDescription = document.createElement('th');
animalDescription.innerHTML = "Description"
row.appendChild(animalName)
row.appendChild(animalDescription)
table.appendChild(row)

for(var i in animals){
var aniRow = document.createElement('tr')
  var tdName = document.createElement('td');
  tdName.innerHTML = animals[i].name
  aniRow.appendChild(tdName)
  var tdDescription = document.createElement('td');
  tdDescription.innerHTML = animals[i].description
  animalDescription.appendChild(tdDescription)
  aniRow.appendChild(tdDescription)
  table.appendChild(aniRow)
}
document.body.appendChild(table)