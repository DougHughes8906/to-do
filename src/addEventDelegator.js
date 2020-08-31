import displayProject from './displayProject'
import {openItemModal, closeItemModal} from './modals'
import saveItemInput from './saveItemInput'
import clearItemInputs from './clearItemInputs'
import {updateItemInfo, addItemInfo} from './enterItemInfo'

// adds the listening functionality for all events on the page

const addEventDelegator = (profile) => {

	// listen for all click events
	document.addEventListener('click', function (event) {

		// user wants to add a new item to the project
		if (event.target.matches('.openAddItem')) {
			// indicate that an item is being added
			profile.setAddItem();
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
	
			// indicate that an item is being edited
			profile.setUpdateItem();
	
			openItemModal(profile.getItemSelection());	
		}

		// user finished entering information in add item modal
		if (event.target.matches('#addItem')) {

			addItemInfo(profile);	

			// indicate that an item is done being edited
			profile.setAddItem();

			// display the updated project
			displayProject(profile.getSelection());
		}

		// user finished entering information in update item modal
		if (event.target.matches('.updateItem')) {

			// get the item selected	
			let curItem = profile.getItemSelection();

			updateItemInfo(curItem);	

			// indicate that an item is done being edited
			profile.setUpdateItem();

			// display the updated project
			displayProject(profile.getSelection());
		}

		// user closed the item modal without adding or updating
		// an item
		if (event.target.matches('.modal') || 
			event.target.matches('.closeItemModal')) {
			clearItemInputs();
			if (profile.getAddItem()) {
				profile.setAddItem();
			}
			else {
				profile.setUpdateItem();
			}
			closeItemModal();
		}	

	}, false);

	// listen for all key events
	document.addEventListener('keypress', function (event) {
		if (event.key === 'Enter') {
			// check to see if an item is being added
			if (profile.getAddItem()) {
				addItemInfo(profile);	

				// indicate that an item is done being edited
				profile.setAddItem();

				// display the updated project
				displayProject(profile.getSelection());

			}
			// check to see if an item is being updated
			else if (profile.getUpdateItem()) {
				// get the item selected	
				let curItem = profile.getItemSelection();

				updateItemInfo(curItem);	

				// indicate that an item is done being edited
				profile.setUpdateItem();

				// display the updated project
				displayProject(profile.getSelection());
			}
		}
	}, false);

};

export default addEventDelegator
