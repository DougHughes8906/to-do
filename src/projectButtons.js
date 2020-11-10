
// adds the removal button and or the set home project button
const addProjectButtons = (profile) => {
	// if there is exactly one project selected, add both of the buttons
	if (profile.getNumSelected() == 1) {
		let projContainer = document.getElementById('projectContainer');

		// create the home index button
		let homeIndBtn = document.createElement('div');
		homeIndBtn.id = 'setHomeIndex';
		homeIndBtn.appendChild(document.createTextNode('Set as home project'));
		projContainer.appendChild(homeIndBtn);	
 
	}	
};

// removes the removal button and or the set home project button
const removeProjectButtons = (profile) => {
		
};

export {
	addProjectButtons,
	removeProjectButtons
}
