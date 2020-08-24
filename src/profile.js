
import Project from './project'

// used to hold all of the project data for a given user

const Profile = () => {

	let projectList = [];

	// the index of the project that will be displayed on the home page
	let homeIndex = -1;

	const addProject = () => {
		projectList.push(Project());
		if (projectList.length === 1) {
			homeIndex = 0;
		}
	};

	const removeProject = (index) => {
		if (index < 0 || index >= projectList.length) {
			console.log(`Index ${newIndex} is not a valid index of the project list`);
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
		
	return {addProject, removeProject, getHomeIndex, setHomeIndex};
};

export default Profile
