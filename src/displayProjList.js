// adds the list of projects to the page

const displayProjList = (profile) => {

	// get the div that will hold the titles of the projects
	let contentDiv = document.getElementsByClassName('Content')[0];

	// clear any content from the div
	while (contentDiv.firstChild) {
		contentDiv.removeChild(contentDiv.lastChild);
	}

	// add the title for the project to the page
	let titleElem = document.createElement('h2');
	titleElem.appendChild(document.createTextNode('Projects'));
	titleElem.id = 'projListTitle';

	contentDiv.appendChild(titleElem);	

	// create a div that will hold all of the project titles
	let projContainer = document.createElement('div');
	projContainer.id = 'projectContainer';

	// add rows for each of the projects in the profile
	let numItems = profile.getNumProjects();

	for (let i = 0; i < numItems; i++) {
		// get the next project
		let curProj = profile.getProject(i);

		let projDiv = document.createElement('div');
		projDiv.classList.add('projectLine');	

		// add the title for the project
		let projTitleDiv = document.createElement('div');
		projTitleDiv.appendChild(document.createTextNode(curProj.getTitle()));
		projTitleDiv.id = 'project' + i;

		projDiv.appendChild(projTitleDiv);	
		
		// add the projDiv to the projContainer
		projContainer.appendChild(projDiv);
	}	

	// add the add project div to the projContainer
	let addProject = document.createElement('div');
	addProject.appendChild(document.createTextNode('+ Add Project'));
	addProject.classList.add('openAddProject');
	projContainer.appendChild(addProject);	

	// add the projContainer to the Content div
	contentDiv.appendChild(projContainer);
};

export default displayProjList
