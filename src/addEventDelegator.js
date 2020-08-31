import displayProject from './displayProject'
import {openItemModal, closeItemModal} from './modals'
import saveItemInput from './saveItemInput'
import clearItemInputs from './clearItemInputs'
import {updateItemInfo, addItemInfo} from './enterItemInfo'
import handleProjTitleSave from './handleProjTitleSave'

// adds the listening functionality for all events on the page

const addEventDelegator = (profile) => {

	// listen for all click events
	document.addEventListener('click', function (event) {

		// if there's a click anywhere on the screen other than
		// the project title and the project title is being edited,
		// set the new project title
		if (profile.projTitleActive() && 
			!(event.target.matches('#projTitleInput'))) {
			handleProjTitleSave(profile); 
		}

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

		// user clicked the project title, allow it to be edited
		if (event.target.matches('#projTitle')) {
		
			// if the value is set to the default ('New Project'), set it
			// to an empty string
			let curVal = event.target.textContent;
			if (curVal === "New Project") {
				curVal = "";
			}

			// remove the h2 element
			let parentDiv = document.getElementsByClassName('Content')[0];
			parentDiv.removeChild(event.target);

			// create the input element
			let projTitleInput = document.createElement('input');
			projTitleInput.type = 'text';
			projTitleInput.id = 'projTitleInput';
			projTitleInput.value = curVal;

			// reset the content div to include the input element
			let itemsDiv = document.getElementsByClassName('itemsDiv')[0];

			parentDiv.removeChild(itemsDiv);

			parentDiv.appendChild(projTitleInput);
			parentDiv.appendChild(itemsDiv);

			// give the input element focus
			projTitleInput.focus();

			// indicate that the project title is actively being edited
			profile.setProjTitleActive();
		
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
			// check to see if the project title is being updated
			else if (profile.projTitleActive()) {
				handleProjTitleSave(profile); 
			}
		}
	}, false);

};

export default addEventDelegator
