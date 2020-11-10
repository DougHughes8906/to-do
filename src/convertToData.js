
import ItemData from './itemData'
import ProjectData from './projectData'
import ProfileData from './profileData'

// converts an item object to an ItemData object for storage in 
// localStorage

const itemToData = (item) => {
	let newItemData = ItemData();

	newItemData.title = item.getTitle();
	newItemData.description = item.getDescription();
	newItemData.dueDate = item.getDueDate();
	newItemData.priority = item.getPriority();
	newItemData.complete = item.isComplete();
	newItemData.order = item.getOrder();

	return newItemData;	
};

// converts a project object to a ProjectData object for storage in
// localStorage
const projectToData = (project) => {

	let newProjectData = ProjectData();

	// convert each of the items in the item list to ItemData objects 
	// and add to the ProjectData list
	for (let i = 0; i < project.getNumItems(); i++) {
		let nextItem = project.getItem(i);

		newProjectData.itemDataList.push(itemToData(nextItem));
	}

	newProjectData.complete = project.isComplete();
	newProjectData.numComplete = project.getNumComplete();
	newProjectData.projectTitle = project.getTitle();
	newProjectData.createCount = project.getCreateCount();
	newProjectData.sortType = project.getSortType();
	newProjectData.sortDirection = project.getSortDirection();	
	
	return newProjectData;
};

// converts a profile obejct to a ProfileData object for storage in 
// localStorage
const profileToData = (profile) => {

	let newProfileData = ProfileData();

	// convert each of the projects in the projectList to ProjectData
	// objects
	for (let i = 0; i < profile.getNumProjects(); i++) {
		let nextProject = profile.getProject(i);

		newProfileData.projectDataList.push(projectToData(nextProject));
	}	

	newProfileData.projectCheckList = profile.getProjCheckList();
	newProfileData.homeIndex = profile.getHomeIndex();
	newProfileData.selectedIndex = profile.getSelectIndex();
	newProfileData.itemIndex = profile.getItemIndex();
	newProfileData.addItemStatus = profile.getAddItem();
	newProfileData.updateItemStatus = profile.getUpdateItem();
	newProfileData.projTitleStatus = profile.projTitleActive();

	return newProfileData;
};

export {
	itemToData,
	projectToData,
	profileToData
}
