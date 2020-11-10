
import Item from './item'
import Project from './project'
import Profile from './profile'

// converts an ItemData object to an Item object

const itemFromData = (itemData) => {

	let newItem = Item();

	newItem.changeTitle(itemData.title);
	newItem.changeDesc(itemData.description);
	newItem.changeDueDate(itemData.dueDate);
	newItem.changePriority(itemData.priority);
	if (itemData.complete) {
		newItem.setComplete();
	}
	else {
		newItem.setIncomplete();
	}
	newItem.setOrder(itemData.order);
	
	return newItem;	
};

// converts a ProjectData object to a Project object
 
const projectFromData = (projectData) => {

	let newProject = Project();

	for (let i = 0; i < projectData.itemDataList.length; i++) {
		let newItem = itemFromData(projectData.itemDataList[i]);

		newProject.addExistingItem(newItem);
	}

	newProject.setComplete(projectData.complete);
	newProject.setNumComplete(projectData.numComplete);
	newProject.changeTitle(projectData.projectTitle);
	newProject.setCreateCount(projectData.createCount);
	newProject.setSortType(projectData.sortType);
	newProject.setSortDirection(projectData.sortDirection);
	
	return newProject;
};

// converts a ProfileData object to a profile object

const profileFromData = (profileData) => {	

	let newProfile = Profile();

	for (let i = 0; i < profileData.projectDataList.length; i++) {
		let newProject = projectFromData(profileData.projectDataList[i]);

		newProfile.addExistingProject(newProject);
	}

	newProfile.setProjCheckedList(profileData.projectCheckList);
	newProfile.setHomeIndex(profileData.homeIndex);
	newProfile.selectProject(profileData.selectedIndex);
	newProfile.selectItem(profileData.itemIndex);
	if (profileData.addItemStatus) {
		newProfile.setAddItem();
	}
	if (profileData.updateItemStatus) {
		newProfile.setUpdateItem();
	}
	if (profileData.projTitleStatus) {
		newProfile.setProjTitleActive();
	}
	
	return newProfile;
};

export {
	itemFromData,
	projectFromData,
	profileFromData
}
