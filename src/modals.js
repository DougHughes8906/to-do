
// opens the modal that either adds a new item or updates an existing item

const openItemModal = (item) => {
	// get the modal element
	let modalElem = document.getElementsByClassName('modal')[0];
	// make the modal visible
	modalElem.style.display = 'block';
	let itemTitInput = document.getElementById('itemTitleInput');
	let addBtn = document.getElementById('addItem');
	let itemDescInput = document.getElementById('itemDescription');
	let dueDateInput = document.getElementById('dueDateInput');
	let priorityInput = document.getElementById('priorityInput');

	// if an existing item was passed in, fill with the existing info
	if (item !== undefined) {
		itemTitInput.value = item.getTitle();
		itemDescInput.value = item.getDescription();
		dueDateInput.value = item.getDueDate();
		// change the text of the add button to read Update
		addBtn.textContent = 'Update Item';	
		// get the selected priority option
		let selectOptions = priorityInput.options;
		let selIndex = -1;
		let curInd = 0;	
		while (selIndex === -1 && curInd < selectOptions.length) {	
			if (selectOptions[curInd].value === item.getPriority()) {
				selIndex = curInd;	
			}
			curInd++;
		}
		priorityInput.selectedIndex = selIndex;
	}
	else {
		addBtn.textContent = 'Add Item';
	}
	// give focus to the title input
	itemTitInput.focus();
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
