import saveItemInput from './saveItemInput'
import {closeItemModal} from './modals'
import clearItemInputs from './clearItemInputs'

// updates a given item based on user input
const updateItemInfo = (item) => {
	// save the inputted info to the item
	saveItemInput(item);
	// clear the input fields
	clearItemInputs();
	// close out the modal
	closeItemModal();	
};

// adds a new item to a profile based on user input
const addItemInfo = (profile) => {
	let curProj = profile.getSelection();
	curProj.addItem();
	updateItemInfo(curProj.getItem(curProj.getNumItems() - 1));	
};

export {
	updateItemInfo,
	addItemInfo
}
