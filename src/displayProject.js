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
};

export default displayProject
