import completeMsg from './completeMsg';
import setupPage from './pageFrame';
import getStoredContent from './getStoredContent'
import Profile from './profile'

function completeElem(taskName) {

	let element = document.createElement('div');

	element.innerHTML = completeMsg(taskName);

	return element;
}

// get the previously saved content (if any)
let userProfile = getStoredContent();

// if no saved data, create a new profile
if (userProfile === null) {
	userProfile = Profile();
	// add the first project
	userProfile.addProject();
}

// set up the outer frame for the page
setupPage();

