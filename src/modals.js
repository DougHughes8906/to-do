
// opens the modal that either adds a new item or updates an existing item

const openItemModal = (item) => {
	// get the modal element
	let modalElem = document.getElementsByClassName('modal')[0];
	// make the modal visible
	modalElem.style.display = 'block';
};

// closes the item modal 
const closeItemModal = () => {
	let modalElem = document.getElementsByClassName('modal')[0];
	modalElem.style.display = 'none';	
};

export {
	openItemModal,
	closeItemModal
}
