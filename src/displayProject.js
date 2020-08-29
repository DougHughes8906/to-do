// not sure if this line is necessary: import Project from './project'

// adds the project data to the page

const displayProject = (proj) => {

	// get the div that will hold the project data
	let contentDiv = document.getElementsByClassName('Content')[0];

	// clear any content from the div
	while (contentDiv.firstChild) {
		contentDiv.removeChild(contentDiv.lastChild);
	}

	// add the title for the project to the page
	let titleElem = document.createElement('h2');
	titleElem.appendChild(document.createTextNode(proj.getTitle()));

	contentDiv.appendChild(titleElem);	

	// create a div that will hold all of the items for the project
	let itemContainer = document.createElement('div');

	// add rows for each of the items in the project to the itemContainer
	let numItems = proj.getNumItems();

	for (let i = 0; i < numItems; i++) {
		// get the next item
		let curItem = proj.getItem(i);

		let itemDiv = document.createElement('div');
		itemDiv.classList.add('itemContainer');

		// add a checkbox for the item
		let itemCheckDiv = document.createElement('div');
		let itemCheckbox = document.createElement('input');
		itemCheckbox.setAttribute('type', 'checkbox');
		itemCheckDiv.appendChild(itemCheckbox);
		
		itemDiv.appendChild(itemCheckDiv);

		// add the title for the item
		let itemTitleDiv = document.createElement('div');
		itemTitleDiv.appendChild(document.createTextNode(curItem.getTitle()));

		itemDiv.appendChild(itemTitleDiv);	
		
		// add the itemDiv to the itemContainer
		itemContainer.appendChild(itemDiv);
	}	

	// add the itemContainer to the Content div
	contentDiv.appendChild(itemContainer);
};

export default displayProject
