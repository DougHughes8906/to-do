import displayProject from './displayProject'
import displayProjList from './displayProjList'
import {openItemModal, closeItemModal} from './modals'
import saveItemInput from './saveItemInput'
import clearItemInputs from './clearItemInputs'
import {updateItemInfo, addItemInfo} from './enterItemInfo'
import handleProjTitleSave from './handleProjTitleSave'
import storeContent from './storeContent'

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

		// user has clicked the check next to an item
		if (event.target.matches('.itemCheck')) {
			// get the index for the item
			let itemId = event.target.id;
			// the check ids are in the format 'checkXXXX'
			itemId = parseInt(itemId.slice(5));

			let curProj = profile.getSelection();		

			if (event.target.checked) {
				curProj.completeItem(itemId);
			}
			else {
				curProj.incompleteItem(itemId);
			}

			displayProject(profile.getSelection());			
		}

		// user has clicked the check next to a project in 
    // the projects list page
    if (event.target.matches('.projCheck')) {
      // get the index for the project
      let projId = event.target.id;
      // the check ids are in the format 'projcheckXXX'
      projId = parseInt(projId.slice(9));

      if (event.target.checked) {
        profile.checkProj(projId);
      }
      else {
        profile.uncheckProj(projId);
      }

      displayProjList(profile);
    }	

		// user is deleting an item
		if (event.target.matches('.delete')) {
			// get the index for the item
			let itemId = event.target.id;
			// the delete ids are in the format 'deleteXXXX'
			itemId = parseInt(itemId.slice(6));

			profile.removeItem(itemId);

			displayProject(profile.getSelection());
		}

		// user wants to update an existing item in the project
		if (event.target.matches('.itemTitle')) {
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

			// check to see if an item is being added
			if (profile.getAddItem()) {
				addItemInfo(profile);	

				// indicate that an item is done being edited
				profile.setAddItem();

				// display the updated project
				displayProject(profile.getSelection());

			}

			// otherwise this must be an update to an existing item
			else {
				// get the item selected	
				let curItem = profile.getItemSelection();

				updateItemInfo(curItem);	

				// indicate that an item is done being edited
				profile.setUpdateItem();

				// display the updated project
				displayProject(profile.getSelection());
			}
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

			// set the elements of the content div back in the correct order
			let sortDiv = document.getElementById('sortDiv');
			let itemsDiv = document.getElementsByClassName('itemsDiv')[0];
			let removeDiv = document.getElementById('removeAllComplete');

			while (parentDiv.firstChild) {
				parentDiv.removeChild(parentDiv.lastChild);
			}

			parentDiv.appendChild(projTitleInput);
			if (sortDiv !== null) {
				parentDiv.appendChild(sortDiv);
			}
			parentDiv.appendChild(itemsDiv);
			if (removeDiv !== null) {
				parentDiv.appendChild(document.createElement('br'));
				parentDiv.appendChild(removeDiv);
			}

			// give the input element focus
			projTitleInput.focus();

			// indicate that the project title is actively being edited
			profile.setProjTitleActive();
		
		}

		// user clicked to navigate to a project from the 
		// Projects tab
		if (event.target.matches('.projTitle')) {
			// project ids are in the format 'projectXXXX'
			let projIndex = parseInt((event.target.id).slice(7));
			profile.selectProject(projIndex);
			displayProject(profile.getSelection());
		}

		// user is adding a new project
		if (event.target.matches('.openAddProject')) {
			let newProj = profile.addProject();
			profile.selectProject(profile.getNumProjects() - 1);
			displayProject(newProj);
		}

		// user navigated to the projects list page
		if (event.target.matches('#NavProjects')) {
			// reset the number of selected projects from the last time
			// this page was visited
			profile.resetNumSelected();

			displayProjList(profile);
		}	

		// user navigated to the home page
		if (event.target.matches('#NavHome')) {
			// display the home project
			profile.selectProject(profile.getHomeIndex());	
			let homeProj = profile.getSelection();
			displayProject(homeProj);
		}

		// user clicked the sort by priority (highest at top) button
		if (event.target.matches('#sortUp')) {
			if (event.target.classList[1] === 'sortBtnOff') {
				profile.getSelection().sortBy('priority', false);
			}
			else {
				profile.getSelection().sortBy('creationOrder');	
			}
	
			displayProject(profile.getSelection());
		}

		// user clicked the sort by priority (highest at bottom) button
		if (event.target.matches('#sortDown')) {
			if (event.target.classList[1] === 'sortBtnOff') {
				profile.getSelection().sortBy('priority', true);
			}
			else {
				profile.getSelection().sortBy('creationOrder');
			}
				
			displayProject(profile.getSelection());
		}

		// user clicked the remove all completed items button
		if (event.target.matches('#removeAllComplete')) {
			profile.getSelection().removeAllComplete();

			displayProject(profile.getSelection());
		}

		// no matter what action is taken, save the profile data to local
		// storage
		storeContent(profile);

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

		// no matter what action is taken, store the profile data
		// to local storage
		storeContent(profile);
	}, false);

};

export default addEventDelegator
