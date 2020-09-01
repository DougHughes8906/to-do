
// clears all of the input fields for the add / update item
// modal box

const clearItemInputs = () => {

	// get the title input
	let titleInput = document.getElementById('itemTitleInput');
	titleInput.value = '';

	// get the description input
	let descInput = document.getElementById('itemDescription');
	descInput.value = '';

}

export default clearItemInputs
