
import Project from './project'

// used to hold all of the project data for a given user

const Profile = () => {

	let projectList = [];

	// the index of the project that will be displayed on the home page
	let homeIndex = -1;

	// the index of the currently selected project
	let selectedIndex = -1;

	// the index of the currently selected item (i.e. an update item 
	// window must be opened)
	let itemIndex = -1;

	// holds true if an item is currently being added 
	let addItemStatus = false;

	// holds true if an item is currently being updated
	let updateItemStatus = false;

	// holds true if the currently selected project title is being 
	// edited
	let projTitleStatus = false;

	const addProject = () => {
		projectList.push(Project());
		if (projectList.length === 1) {
			homeIndex = 0;
			selectedIndex = 0;
		}

		return projectList[projectList.length - 1];
	};

	const removeProject = (index) => {
		if (index < 0 || index >= projectList.length) {
			console.log(`Index ${index} is not a valid index of the project list`);
		}
		else {
			projectList.splice(index, 1);
		}
	};
	
	const getHomeIndex = () => {
		return homeIndex;
	};

	const setHomeIndex = (newIndex) => {
		if (newIndex < 0 || newIndex >= projectList.length) {
			console.log(`Index ${newIndex} is not a valid index of the project list`);
		}
		else {
			homeIndex = newIndex;
		}
	};

	const getProject = (index) => {
		if (index < 0 || index >= projectList.length) {
			console.log(`Index ${index} is not a valid index of the project list`);
		}
		else {
			return projectList[index];
		}
	}

	const selectProject = (index) => {
		if (index < 0 || index >= projectList.length) {
			console.log(`Index ${index} is not a valid index of the project list`);
		}
		else {
			selectedIndex = index;
		}
	}

	const getSelection = () => {
		if (selectedIndex !== -1) {
			return projectList[selectedIndex];
		}
	}

	const selectItem = (index) => {
		if (selectedIndex === -1) {
			console.log('No project currently selected');
		}	
		else {
			itemIndex = index;	
		}
	}

	const getItemSelection = () => {
		let curProj = getSelection();
		return curProj.getItem(itemIndex);
	}

	const setAddItem = () => {
		addItemStatus = !addItemStatus;
	}

	const getAddItem = () => {
		return addItemStatus;
	}

	const setUpdateItem = () => {
		updateItemStatus = !updateItemStatus;
	}

	const getUpdateItem = () => {
		return updateItemStatus;
	}	

	const projTitleActive = () => {
		return projTitleStatus;
	}

	const setProjTitleActive = () => {
		projTitleStatus = !projTitleStatus;
	}

	const getNumProjects = () => {
		return projectList.length; 
	}
	
	return {addProject, removeProject, getHomeIndex, setHomeIndex, getProject,
		selectProject, getSelection, selectItem, getItemSelection, setAddItem,
		getAddItem, setUpdateItem, getUpdateItem, projTitleActive, 
		setProjTitleActive, getNumProjects};
};

export default Profile
