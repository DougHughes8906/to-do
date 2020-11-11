
import Project from './project'

// used to hold all of the project data for a given user

const Profile = () => {

	let projectList = [];

	// data for the projects list page, holds whether or not
	// a given project is checked
	let projChecked = [];

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

	// holds the number of currently selected projects on the projects list
	// page
	let numSelected = 0;

	const addProject = () => {
		projectList.push(Project());
		projChecked.push(false);
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
			projChecked.splice(index, 1);
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

	const removeItem = (index) => {
		projectList[selectedIndex].removeItem(index);	
	}

	const getSelectIndex = () => {
		return selectedIndex;
	}

	const getItemIndex = () => {
		return itemIndex;
	}

	const incNumSelected = () => {
		numSelected = numSelected + 1;
	}

	const decNumSelected = () => {
		numSelected = numSelected - 1;
	}

	const resetNumSelected = () => {
		numSelected = 0;
	}

	const getNumSelected = () => {
		return numSelected;
	}

	// functions for existing data from localStorage

	const addExistingProject = (project) => {
		projectList.push(project);
	};

	// functions for checking / unchecking projects on the projects
	// list page
	const checkProj = (index) => {
		if (index < 0 || index >= projChecked.length) {
			console.log(`Index ${index} is not a valid index of the project list`);
		}
		else {
			projChecked[index] = true;		
		}
	};

	const uncheckProj = (index) => {
		if (index < 0 || index >= projChecked.length) {
			console.log(`Index ${index} is not a valid index of the project list`);
		}
		else {
			projChecked[index] = false;		
		}
	};

	const projIsChecked = (index) => {
		if (index < 0 || index >= projChecked.length) {
			console.log(`Index ${index} is not a valid index of the project list`);
		}
		else {
			return projChecked[index];
		}	
	};

	const getProjCheckList = () => {
		return projChecked;
	};

	const setProjCheckedList = (checkedList) => {
		projChecked = checkedList;
	};

	const removeSelectedProjects = () => {
		let i = 0;
		while (i < projChecked.length) {
			if (projChecked[i]) {
				removeProject(i);
				i--;
			}	
			i++;
		}	
	};
	
	return {addProject, removeProject, getHomeIndex, setHomeIndex, getProject,
		selectProject, getSelection, selectItem, getItemSelection, setAddItem,
		getAddItem, setUpdateItem, getUpdateItem, projTitleActive, 
		setProjTitleActive, getNumProjects, removeItem, getSelectIndex,
		getItemIndex, incNumSelected, decNumSelected, 
		resetNumSelected, addExistingProject, checkProj, uncheckProj, 
		projIsChecked, getProjCheckList, setProjCheckedList,
		removeSelectedProjects};
};

export default Profile
