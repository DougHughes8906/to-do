
import displayProject from './displayProject'

const handleProjTitleSave = (profile) => {

	let curProj = profile.getSelection();

	// get the value of the new title from the input element
	let newVal = document.getElementById('projTitleInput').value;

	let trimmedVal = newVal.trim();	
	
	// if the new title is all whitespace or empty, set to the previous 
	// title
	if (trimmedVal !== "") {
		// otherwise update to the new title
		curProj.changeTitle(newVal);	
	}	
	
	// display the updated project
	displayProject(curProj);	

	// set the project title to not being actively edited
	profile.setProjTitleActive();
}

export default handleProjTitleSave
