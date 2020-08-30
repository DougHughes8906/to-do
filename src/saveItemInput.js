
// takes in an item and saves to that item the inputs in the 
// add item / update item modal box

const saveItemInput = (item) => {

	// get the title input
	let titleInput = document.getElementById('itemTitleInput');
	// set the new title for the item
	item.changeTitle(titleInput.value);

}

export default saveItemInput