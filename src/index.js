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

// set up the outer frame for the page
setupPage();

// get the home project
let homeProject = userProfile.getProject(userProfile.getHomeIndex());

// add a test item to the project
homeProject.addItem();

let testItem = homeProject.getItem(0);

testItem.changeTitle("Test");
testItem.changeDesc("Hi this is a test");
testItem.changeDueDate("Friday");
testItem.changePriority(6);

// add another test item
homeProject.addItem();

let secItem = homeProject.getItem(1);

secItem.changeTitle("Second Item");

// add the home project to the page
displayProject(homeProject);

// add the event delegator
addEventDelegator(userProfile);
