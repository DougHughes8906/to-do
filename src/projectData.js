
// object used to store the data of a project in localStorage

const ProjectData = () => {

	let itemDataList = [];	
	let complete = false;
	let numComplete = 0;
	let projectTitle = '';
	let createCount = 0;
	let sortType = '';	
	let sortDirection = false;
		
	return {itemDataList, complete, numComplete, projectTitle, createCount,
		sortType, sortDirection};
};

export default ProjectData
