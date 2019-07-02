// var xhttp = new XMLHttpRequest();
//
// var addBtn = document.createElement("button");
// 	addBtn.id = "addBtn";
// 	addBtn.style.height = "25px";
// 	addBtn.style.width = "50px";
// 	addBtn.innerHTML = "Add";

	var addBtn = $('<button>');
	addBtn.attr({
		id: 'confirm' + i,
	});
	addBtn.css({
		height: "25px",
		width: "50px"
	});
	addBtn.html("Add");

//
// var animalEntry = document.createElement("INPUT");
// animalEntry.id = "animalEntry"
// animalEntry.setAttribute("type", "text");
// animalEntry.value = "Animal Name";

var animalEntry = $('<input>');
animalEntry.attr({
	id: 'animalEntry',
	type: 'text',
	value: "Animal Name"
})

var descriptionEntry = document.createElement("INPUT");
descriptionEntry.id = "descriptionEntry"
descriptionEntry.setAttribute("type", "text");
descriptionEntry.value = "Description";

var descriptionEntry = $('<input>');
descriptionEntry.attr({
	id: 'descriptionEntry',
	type: 'text',
	value: "Description"
});
addBtn.click(function(){
			$.ajax({
				type: "POST",
				dataType: 'JSON',
				url: "http://localhost:3000/animals",
				data: {
							'name': animalEntry.val(),
							'description': descriptionEntry.val()
						},
				success: function(response){
							const value = response;
							animals.push(value);
							var deleteBtn = $('<button>');
							deleteBtn.css({'height': 25, 'width':50});
							deleteBtn.html("Delete");

							var editBtn = $('<button>');
							editBtn.css({'height': 25, 'width':50});
							editBtn.html("Edit");
						addAnimal(animalEntry.val(), descriptionEntry.val(), deleteBtn, editBtn);
				}
			})
	})

function addAnimal(name, description, deleteBtn, editBtn){
	var table = $('#aniTable');
	let aniRow = $('<tr>');
		aniRow.attr('id' , "aniRow" + name + (animals.length-1));
		let tdName = $('<td>');
	  	tdName.html(name);
	  	tdName.attr('id' , animals[animals.length-1]._id + "name");
	  	aniRow.append(tdName);
			let tdDescription = $('<td>');
	  	tdDescription.html(description);
	  	tdDescription.attr('id' , animals[animals.length-1]._id + "description")
	  	deleteBtn.attr('id' ,"delete" + (animals.length-1));
	  	editBtn.attr('id' ,"edit" + (animals.length-1));
	  	tdDescription.append(deleteBtn);
	  	tdDescription.append(editBtn);
	  	aniRow.append(tdDescription);
	  	table.append(aniRow);
	  	// This will append it to the dropdown list
	  	list =  $("#animalList");
	  	let new_animal = $('<option>');
	    new_animal.append(document.createTextNode(name));
			new_animal.attr({
				id: animals[animals.length-1]._id,
				value: description
			});
	    list.append(new_animal);
	    deleteButtonListener(animals.length-1);
		editButtonListener(animals.length-1);
}
function deleteButtonListener(aniIndex){
			let currButton = $('#delete' + aniIndex)
			currButton.click(function(){
					$.ajax({
						type: "DELETE",
						dataType: 'JSON',
						url: "http://localhost:3000/animals/" + animals[aniIndex]._id,
						success: function(result){
								var animalList = result;
									//deletes from the table
									let aniTable = $("#aniTable");
									let row = $('#aniRow' + animals[aniIndex].name + (aniIndex))
									row.remove();
									//deletes from the dropdown
								  	document.getElementById(animals[aniIndex]._id).selected = true;
								  		$("#animalList :selected").remove();
								}
					})
				})
		}

function editButtonListener(aniIndex){
			let currButton = $('#edit' + aniIndex)
			let clicked = false;
			currButton.click(function(){
			if(!clicked){
				clicked = true;
				let row = $('#' + animals[aniIndex]._id + "description");
				let new_name = $('#' + animals[aniIndex]._id + "name");
				let new_description = $('#' + animals[aniIndex]._id + "description");

				var editName = $('<input>');
				editName.attr({
					id: 'editName',
					type: 'text'
				}).val(new_name.html())

				var editDescription = $('<input>');
				editDescription.attr({
					id: 'editDescription',
					type: 'text'
				}).val(new_description.contents()[0].nodeValue);

				row.append(editName);
				row.append(editDescription);

				let confirmBtn = $('<button>');
				confirmBtn.attr({
					id: 'confirm' + aniIndex,
				});
				confirmBtn.css({
					height: "25px",
					width: "60px"
				});

				confirmBtn.html("Confirm");

				row.append(confirmBtn);

				confirmBtn.click(function(){
					$.ajax({
						type: "PUT",
						url: "http://localhost:3000/animals/" + animals[aniIndex]._id,
						dataType: "JSON",
						data: {
									'name': editName.value,
									'description': editDescription.value
								},
						success: function(result){
									var animalList = result;
										var drop_val = $('#' + animals[aniIndex]._id);
										new_name.html(editName.value);
										new_description.contents()[0].nodeValue = editDescription.val();
									  	list = document.getElementById("animalList");
								  		drop_val.html(editName.val());
								  		drop_val.val(editDescription.val());
											editName.css('display', 'none');
											editDescription.css('display', 'none');
											confirmBtn.css('display', 'none');
									  	clicked = false;
									}
					})
			});
			row.append(confirmBtn);
	}
})
}


var body = $('body');
body.append(addBtn);
body.append(animalEntry);
body.append(descriptionEntry);
