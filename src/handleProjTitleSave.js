
import displayProject from './displayProject'

const handleProjTitleSave = (profile) => {

	// get the value of the new title from the input element
	let newVal = document.getElementById('projTitleInput').value;

	// update the project title
	let curProj = profile.getSelection();
	curProj.changeTitle(newVal);

	// display the updated project
	displayProject(curProj);	

	// set the project title to not being actively edited
	profile.setProjTitleActive();
}

export default handleProjTitleSave
