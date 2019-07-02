	var addBtn = $('<button>');
	addBtn
		.attr({id: 'confirm' + i})
		.css({ height: "25px", width: "50px"})
			.html("Add");

var animalEntry = $('<input>');
animalEntry
	.attr({id: 'animalEntry', type: 'text'})
		.val('Animal Name');


var descriptionEntry = $('<input>');
descriptionEntry
	.attr({id: 'descriptionEntry', type: 'text'})
		.val('Description');

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
								.css({'height': 25, 'width':50});
									.html("Delete");

							var editBtn = $('<button>');
								.css({'height': 25, 'width':50});
									.html("Edit");
						addAnimal(animalEntry.val(), descriptionEntry.val(), deleteBtn, editBtn);
				}
			})
	})

function addAnimal(name, description, deleteBtn, editBtn){
	var table = $('#aniTable');
	let aniRow = $('<tr>');
		aniRow.attr('id' , "aniRow" + name + (animals.length-1));
		let tdName = $('<td>');
	  	tdName
					.html(name);
	  		.attr('id' , animals[animals.length-1]._id + "name");
	  	aniRow.append(tdName);

			let tdDescription = $('<td>');
	  			.html(description);
	  		.attr('id' , animals[animals.length-1]._id + "description")
	  	deleteBtn.attr('id' ,"delete" + (animals.length-1));
	  	editBtn.attr('id' ,"edit" + (animals.length-1));
	  	tdDescription
					.append(deleteBtn);
	  			.append(editBtn);
	  	aniRow.append(tdDescription);
	  	table.append(aniRow);
	  	// This will append it to the dropdown list
	  	list =  $("#animalList");
	  	let new_animal = $('<option>');
			new_animal
					.text(name);
				.attr({id: animals[animals.length-1]._id})
					.val(description);
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
											let row = $('#aniRow' + animals[aniIndex].name + (aniIndex))
											row.remove();
									//deletes from the dropdown
										  $('#' + animals[i]._id).prop('selected', true);
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
				editName
					.attr({ id: 'editName', type: 'text'})
						.val(new_name.html())

				var editDescription = $('<input>');
				editDescription
					.attr({id: 'editDescription', type: 'text' })
						.val(new_description.contents()[0].nodeValue);

				row.append(editName);
				row.append(editDescription);

				let confirmBtn = $('<button>');
				confirmBtn
					.attr({id: 'confirm' + aniIndex});
						.css({ height: "25px", width: "60px" });
						.html("Confirm");

				row.append(confirmBtn);

				confirmBtn.click(function(){
					$.ajax({
						type: "PUT",
						url: "http://localhost:3000/animals/" + animals[aniIndex]._id,
						dataType: "JSON",
						data: {
									'name': editName.val(),
									'description': editDescription.val()
								},
						success: function(result){
									var animalList = result;
										var drop_val = $('#' + animals[aniIndex]._id);
										new_name.html(editName.val());
										new_description.contents()[0].nodeValue = editDescription.val();
								  		drop_val
													.html(editName.val());
								  				.val(editDescription.val());
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
body
	.append(addBtn);
	.append(animalEntry);
	.append(descriptionEntry);
