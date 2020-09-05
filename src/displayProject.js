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
	titleElem.id = 'projTitle';

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
		itemCheckbox.classList.add('itemCheck');
		itemCheckbox.id = 'check' + i;
		if (curItem.isComplete()) {
			itemCheckbox.checked = true;
		}
		itemCheckDiv.appendChild(itemCheckbox);
		
		itemDiv.appendChild(itemCheckDiv);

		// add the title for the item
		let itemTitleDiv = null;
		if (curItem.isComplete()) {
			itemTitleDiv = document.createElement('strike');
		}
		else {
			itemTitleDiv = document.createElement('div');
		}
		itemTitleDiv.appendChild(document.createTextNode(curItem.getTitle()));
		itemTitleDiv.id = 'item' + i;
		itemTitleDiv.classList.add('itemTitle');
		if (curItem.getPriority() !== '') {
			itemTitleDiv.classList.add(curItem.getPriority());
		}

		itemDiv.appendChild(itemTitleDiv);	

		// create the ability to delete an item if it is marked complete
		if (curItem.isComplete()) {
			let deleteBtn = document.createElement('span');
			deleteBtn.appendChild(document.createTextNode('X'));
			deleteBtn.classList.add('delete');
			deleteBtn.id = 'delete' + i;
			itemDiv.appendChild(deleteBtn);
		}
		
		// add the itemDiv to the itemContainer
		itemContainer.appendChild(itemDiv);
	}	

	// add the add item div to the itemContainer
	let addItem = document.createElement('div');
	addItem.appendChild(document.createTextNode('+ Add Item'));
	addItem.classList.add('openAddItem');
	itemContainer.appendChild(addItem);

	itemContainer.classList.add('itemsDiv');

	// add the itemContainer to the Content div
	contentDiv.appendChild(itemContainer);
};

export default displayProject
