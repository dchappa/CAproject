var xhttp = new XMLHttpRequest();

var table = $('<table>');
table.attr({id: "aniTable", align: "center"});
var row = $('<tr>');
var animalName = $('<th>');
animalName.html("Name");
var animalDescription = $('<th>');
animalDescription.html("Description");
row
	.append(animalName);
	.append(animalDescription);
table.append(row);

for(var i in animals){
	let aniRow = $('<tr>');
	aniRow.attr('id', "aniRow" + animals[i].name + i);
  let tdName = $('<td>');
  tdName
			.html(animals[i].name);
  	.attr('id', animals[i]._id + "name");
  aniRow.append(tdName);
  let tdDescription = $('<td>');
  tdDescription
			.html(animals[i].description);
  		.attr('id', animals[i]._id + "description");
  animalDescription.append(tdDescription);
  aniRow.append(tdDescription);
  var deleteBtn = $('<button>');
	deleteBtn
				.attr('id', "delete" + i)
			.css({'height': 25, 'width':50});
				.html("Delete");
	var editBtn = $('<button>');
		editBtn
				.attr('id', "edit" + i);
			.css({'height': 25, 'width':50});
				.html("Edit");
  	tdDescription
			.append(deleteBtn);
  		.append(editBtn);
  table.append(aniRow);
}

$('body').append(table);

	for(let i in animals){
		let currButton = $('#delete'+i);
		currButton.click(function(){
		$.ajax({
			url: "http://localhost:3000/animals/" + animals[i]._id,
			type: "DELETE",
			dataType: "json",
			success: function(result){
									let row = $('#aniRow' + animals[i].name + i);
									row.remove();
								//deletes from the dropdown
								  	$('#' + animals[i]._id).prop('selected', true);
								  	$("#animalList :selected").remove();
									currDeleted++;
			}
		})
	});

		let editButton = $('#edit' + i);
		let clicked = false;
		editButton.click(function(){
			if(!clicked){
				clicked = true;
				let row = $('#' + animals[i]._id + "description");
				let new_name = $('#' + animals[i]._id + "name");
				let new_description = $('#' + animals[i]._id + "description");

				var editName = $('<input>');
				editName
					.attr({id: 'editName', type: 'text'})
						.val(new_name.html());

				var editDescription = $('<input>');
				editDescription
					.attr({id: 'editDescription',type: 'text'})
						.val(new_description.contents()[0].nodeValue);

				row.append(editName);
				row.append(editDescription);

				let confirmBtn = $('<button>');
				confirmBtn
						.attr({id: 'confirm' + i});
					.css({height: "25px", width: "50px"});
						.html("Confirm");

				confirmBtn.click(function(){
						$.ajax({
							url: "http://localhost:3000/animals/" + animals[i]._id,
							type: 'PUT',
							data: {
										'name': editName.val(),
										'description': editDescription.val()
									},
							success: function(data, textStatus){
										var animalList = data;
											var drop_val = $('#' + animals[i]._id);
											new_name.html(editName.val());
											new_description.contents()[0].nodeValue = editDescription.val();
											drop_val.html(editName.val());
								  			drop_val.val(editDescription.val());
												editName.css('display', 'none');
									  		editDescription.css('display', 'none');
									  		confirmBtn.css('display', 'none');
									  		clicked = false;
									  		editName.val(new_name.html());
							}
						})
						});
					row.append(confirmBtn);
			}
		});
}
