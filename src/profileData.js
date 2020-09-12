

// obejct used to store the profile data in localStorage

const ProfileData = () => {

	let projectDataList = [];
	let homeIndex = -1;
	let selectedIndex = -1;
	let itemIndex = -1;
	let addItemStatus = false;
	let updateItemStatus = false;
	let projTitleStatus = false;

	return {projectList, homeIndex, selectedIndex, itemIndex, addItemStatus,
		updateItemStatus, projTitleStatus};
};

export default ProfileData
