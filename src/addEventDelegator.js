import displayProject from './displayProject'
import {openItemModal, closeItemModal} from './modals'

// adds the listening functionality for all events on the page

const addEventDelegator = (profile) => {

	// listen for all click events
	document.addEventListener('click', function (event) {

		// user wants to add a new item to the project
		if (event.target.matches('.openAddItem')) {
			// open modal window to add the item
			openItemModal();
		}

		// user wants to update an existing item in the project
		if (event.target.matches('.openUpdateItem')) {
			// get the index of the item within the project
			let itemId = event.target.id;
			// itemIds are in the format 'itemXXXX'
			itemId = parseInt(itemId.slice(4));

			profile.selectItem(itemId);
		
			openItemModal(profile.getItemSelection());	
		}

		// user finished entering information in add item modal
		if (event.target.matches('.addItem')) {

			closeItemModal();

			// display the updated project
			displayProject(profile.getSelection());
		}

		// user finished entering information in update item modal
		if (event.target.matches('.updateItem')) {

			// get the item selected	
			let curItem = profile.getItemSelection();

			closeItemModal();

			// display the updated project
			displayProject(profile.getSelection());
		}

		// user closed the item modal without adding or updating
		// an item
		if (event.target.matches('.closeItemModal')) {
			closeItemModal();
		}

		// user closed item modal by clicking on the background when the modal
		// was opened
		if (event.target.matches('.modal')) {	
			closeItemModal();
		}

	}, false);

};

export default addEventDelegator
