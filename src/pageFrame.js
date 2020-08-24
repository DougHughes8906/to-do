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
	navDiv.appendChild(homeDiv);

	let projDiv = document.createElement('div');
	projDiv.appendChild(document.createTextNode('Projects'));
	navDiv.appendChild(projDiv);

	let newProjDiv = document.createElement('div');
	newProjDiv.appendChild(document.createTextNode('New Project'));
	navDiv.appendChild(newProjDiv);

	let empDiv2 = document.createElement('div');
	navDiv.appendChild(empDiv2);

	body.appendChild(navDiv);

	// set up div that will hold task list content
	let contentDiv = document.createElement('div');
	contentDiv.classList.add('Content');
	body.appendChild(contentDiv);
};

export default setupPage
