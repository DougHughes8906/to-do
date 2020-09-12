import completeMsg from './completeMsg';
import setupPage from './pageFrame';
import getStoredContent from './getStoredContent'
import Profile from './profile'
import displayProject from './displayProject'
import addEventDelegator from './addEventDelegator'

// get the previously saved content (if any)
//let userProfile = getStoredContent();

let userProfile = null;

console.log(userProfile);

// if no saved data, create a new profile
if (userProfile === null) {
	userProfile = Profile();
	// add the first project
	userProfile.addProject();
}

// set up the outer frame for the page
setupPage();

// get the home project
let homeProject = userProfile.getProject(userProfile.getHomeIndex());

// add the home project to the page
displayProject(homeProject);

// add the event delegator
addEventDelegator(userProfile);
