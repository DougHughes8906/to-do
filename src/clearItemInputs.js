
// clears all of the input fields for the add / update item
// modal box

const clearItemInputs = () => {

	// get the title input
	let titleInput = document.getElementById('itemTitleInput');
	titleInput.value = '';

	// get the description input
	let descInput = document.getElementById('itemDescription');
	descInput.value = '';

	// get the due date input
	let dueDateInput = document.getElementById('dueDateInput');
	dueDateInput.value = '';

	// get the priority input
	let priorityInput = document.getElementById('priorityInput');
	priorityInput.selectedIndex = 0;

}

export default clearItemInputs
