import completeMsg from './completeMsg';
import setupPage from './pageFrame';
import getStoredContent from './getStoredContent'
import Profile from './profile'
import displayProject from './displayProject'
import addEventDelegator from './addEventDelegator'

// get the previously saved content (if any)
let userProfile = getStoredContent();

// if no saved data, create a new profile
if (userProfile === null) {
	userProfile = Profile();
	// add the first project
	userProfile.addProject();
}
// ensure there is at least one active project, if not 
// add a new project for the home page
else {
	if (userProfile.getNumProjects() === 0) {
		userProfile.addProject();
	}
}

// set up the outer frame for the page
setupPage();

// get the last selected project
let curProject = userProfile.getSelection();

// add the home project to the page
displayProject(curProject);

// add the event delegator
addEventDelegator(userProfile);
