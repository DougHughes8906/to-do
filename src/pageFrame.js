// sets up the outer frame for the to do page

const setupPage = () => {

	let body = document.body;

	// set up page header
	let headElem = document.createElement('H1');
	headElem.appendChild(document.createTextNode('Task Manager'));
	body.appendChild(headElem);	

	// set up nav bar
	let navDiv = document.createElement('div');
	navDiv.classList.add('Nav');

	let empDiv = document.createElement('div');
	navDiv.appendChild(empDiv);
	
	let homeDiv = document.createElement('div');
	homeDiv.appendChild(document.createTextNode('Home'));
	homeDiv.id = 'NavHome';
	homeDiv.classList.add('navItem');
	navDiv.appendChild(homeDiv);

	let projDiv = document.createElement('div');
	projDiv.appendChild(document.createTextNode('Projects'));
	projDiv.id = 'NavProjects';
	projDiv.classList.add('navItem');
	navDiv.appendChild(projDiv);

	let newProjDiv = document.createElement('div');
	newProjDiv.appendChild(document.createTextNode('New Project'));
	newProjDiv.id = 'NavNewProject';
	newProjDiv.classList.add('openAddProject');
	newProjDiv.classList.add('navItem');
	navDiv.appendChild(newProjDiv);

	let empDiv2 = document.createElement('div');
	navDiv.appendChild(empDiv2);

	body.appendChild(navDiv);

	// set up div that will be used for the pop-up window to add / update
	// items
	let modalElem = document.createElement('div');
	modalElem.classList.add('modal');
	let modalCont = document.createElement('div');
	modalCont.classList.add('modal-content');

	let modalForm = document.createElement('div');
	let titleSpan = document.createElement('span');
	titleSpan.appendChild(document.createTextNode('Item Title: '));
	modalForm.appendChild(titleSpan);
	let titleInput = document.createElement('input');
	titleInput.type = 'text';
	titleInput.id = 'itemTitleInput';
	modalForm.appendChild(titleInput);

	// add a text area for the item description
	let descDiv = document.createElement('div');
	descDiv.appendChild(document.createTextNode('Description:'));
	let descText = document.createElement('textArea');
	descText.id = 'itemDescription';
	modalForm.appendChild(descDiv);
	modalForm.appendChild(descText);

	// add an input area for the due date
	let dueDateDiv = document.createElement('div');
	dueDateDiv.appendChild(document.createTextNode('Due Date: '));
	let dueDateInput = document.createElement('input');
	dueDateInput.type = 'datetime-local';
	dueDateInput.id = 'dueDateInput';
	modalForm.appendChild(dueDateDiv);
	modalForm.appendChild(dueDateInput);

	// add an input area for the priority
	let priorityDiv = document.createElement('div');
	priorityDiv.appendChild(document.createTextNode('Set Priority: '));
	let prioSelect = document.createElement('select');
	prioSelect.id = 'priorityInput';

	let defaultOption = document.createElement('option');
	defaultOption.value = '';
	defaultOption.appendChild(document.createTextNode(''));
	prioSelect.appendChild(defaultOption);

	let lowOption = document.createElement('option');
	lowOption.value = 'Low';
	lowOption.id = 'lowOption';
	lowOption.appendChild(document.createTextNode('Low'));
	prioSelect.appendChild(lowOption);

	let mediumOption = document.createElement('option');
	mediumOption.value = 'Medium';
	mediumOption.id = 'mediumOption';
	mediumOption.appendChild(document.createTextNode('Medium'));
	prioSelect.appendChild(mediumOption);

	let highOption = document.createElement('option');
	highOption.value = 'High';
	highOption.id = 'highOption';
	highOption.appendChild(document.createTextNode('High'));
	prioSelect.appendChild(highOption);

	priorityDiv.appendChild(prioSelect);
	modalForm.appendChild(priorityDiv);

	let itemButton = document.createElement('div');
	itemButton.appendChild(document.createTextNode('Add Item'));
	itemButton.id = 'addItem';
	modalForm.appendChild(itemButton);

	modalCont.appendChild(modalForm);
	
	modalElem.appendChild(modalCont);

	body.appendChild(modalElem);

	// set up div that will hold task list content
	let contentDiv = document.createElement('div');
	contentDiv.classList.add('Content');
	body.appendChild(contentDiv);
};

export default setupPage
